#!/usr/bin/env bash
#
# Script name: update-exercism-stats.sh
# Description: Updates the Exercism stats section in the README.md file.
# Author: Mathieu Prot <62431571+Rockvald@users.noreply.github.com>
# Version: 1.0.0 (2026-07-28)
# License: MIT
#
# Dependencies:
#   - git
#   - python (For README file manipulation in here-document)
#
# Usage: update-exercism-stats.sh [options]
#
# Options:
#   -p, --push      Push the changes to the remote repository
#   --dry-run       Perform a dry run without making any changes
#   -v, --verbose   Enable verbose output
#   -h, --help      Show this help message
#
# Environment variables:
#   RECENT_LIMIT    The number of recent exercises to display (default: 1)
#   README_FILE     The path to the README file to update (default: README.md)
#
# Exit code:
#   0   Success
#   1   Invalid options provided
#   2   Missing README file or markers

set -euo pipefail

# print_help
# ----------
# Prints the help message for the script.
print_help() {
    cat <<EOF
Usage: $0 [options]

Options:
    -p, --push      Push changes to the remote repository
    --dry-run       Perform a dry run without making changes
    -v, --verbose   Enable verbose output
    -h, --help      Show this help message

Environment Variables:
    RECENT_LIMIT    Number of recent exercises to display (default: 1)
    README_FILE     Path to README file (default: README.md)
EOF
}

# log_verbose MESSAGE
# -------------------
# Logs a verbose message to stderr if verbose output is enabled.
#
# Parameters:
#   MESSAGE     The message to log
log_verbose() {
    [[ $verbose == true ]] && echo "$@" >&2
}

# run_quiet COMMAND
# -----------------
# Runs a command quietly, suppressing output if verbose output is disabled.
#
# Parameters:
#   COMMAND     The command to run
#
# Exit code:
#   0   The command succeeded
#   1   The command failed
run_quiet() {
    if [[ $verbose == true ]]; then
        "$@"
    else
        "$@" 2>/dev/null
    fi
}

# validate_readme
# ---------------
# Validates the README file for the repository.
#
# Exit code:
#   0   The README file is valid
#   1   README file or markes is missing
validate_readme() {
    [[ -f "$README_FILE" ]] || return 1
    grep -qF "$START_MARKER" "$README_FILE" || return 1
    grep -qF "$END_MARKER" "$README_FILE" || return 1
}

# get_languages
# -------------
# Gets the language directories names in the repository.
#
# Exit code:
#   0   The language directories found
get_languages() {
    local langs=()

    while IFS= read -r lang; do
        langs+=("$lang")
    done < <(find . -mindepth 1 -maxdepth 1 -type d ! -name '.git' ! -name '.github' -printf '%f\n')

    echo "${langs[@]}"
}

# get_exercises LANG_DIR
# ----------------------
# Gets the exercises names for a given language directory.
#
# Parameters:
#   LANG_DIR    The directory of the language
#
# Exit code:
#   0   The exercises found
get_exercises() {
    local lang_dir="$1"
    local exercises=()

    while IFS= read -r line; do
        exercises+=("$line")
    done < <(find "$lang_dir" -mindepth 1 -maxdepth 1 -type d -printf "%f\n" | sort)

    echo "${exercises[@]}"
}

# get_recent_exercises LANG_DIR EXERCISES
# ---------------------------------------
# Gets the most recent exercises for a given language as a comma-separated list.
#
# Parameters:
#   LANG_DIR    The directory of the language
#   EXERCISES   The list of exercises to filter (as a space-separated list or an array)
#
# Exit code:
#   0   The exercises found
#   1   No exercises found
get_recent_exercises() {
    local lang_dir="$1"
    shift

    local exercise
    local path
    local timestamp
    local timestamps=()


    for exercise in "$@"; do
        path="$lang_dir/$exercise"

        timestamp=$(run_quiet git log -1 --format=%ct -- "$path" || true)

        if [[ -z $timestamp ]]; then
            log_verbose "Warning: No timestamp found for $exercise. Falling back to stat."

            timestamp=$(run_quiet stat -c %Y "$path" || echo 0)
        fi

        timestamps+=("$timestamp $exercise")
    done

    [[ ${#timestamps[@]} -eq 0 ]] && return 1

    # Sort by timestamp (descending) and extract the top N exercises
    printf "%s\n" "${timestamps[@]}" | sort -nr | head -n "$RECENT_LIMIT" | cut -d ' ' -f2- | awk '{printf "%s%s", (NR>1?", ":""), $0}'
}

# generate_stats_section LANGS
# -------------------
# Builds the statistics section for the README.
#
# Parameters:
#   LANGS   The list of language directories to include in the section
#
# Exit code:
#   0   The generated section
generate_stats_section() {
    local lang
    local count
    local exercises
    local total=0
    local recent=""
    local lang_display
    local section="${START_MARKER}\n## Exercise statistics\n\n"

    for lang in "$@"; do
        if [[ -d $lang ]]; then
            read -r -a exercises <<<"$(get_exercises "$lang")"

            count=${#exercises[@]}
            if [[ $count -eq 0 ]]; then
                log_verbose "Warning: No exercises found in $lang"
                continue
            fi

            total=$((total + count))
            if ! recent=$(get_recent_exercises "$lang" "${exercises[@]}"); then
                log_verbose "Warning: No recent exercises found for $lang"
            fi

            lang_display="$(tr '[:lower:]' '[:upper:]' <<<"${lang:0:1}")${lang:1}"
            section+="- ${lang_display}: ${count}"

            if [[ -n $recent ]]; then
                section+=" (recent: ${recent})"
            fi

            section+="\n"
        fi
    done

    section+="\n- Total exercises: ${total}\n${END_MARKER}"
    echo "$section"
}

# update_readme SECTION
# ---------------------
# Updates the README file with the new statistics section.
#
# Parameters:
#   SECTION     The new statistics section to insert
#
# Exit code:
#   0   The README was updated successfully
update_readme() {
    local section="$1"

    if [[ $dry_run == true ]]; then
        echo -e "----- Dry run mode -----\n\nThe README would be updated with section:\n\n$section"
        return
    fi

    python - <<PY
from pathlib import Path
p = Path("$README_FILE")
txt = p.read_text(encoding="utf-8")
start = "$START_MARKER"
end = "$END_MARKER"
before, rest = txt.split(start, 1)
_, after = rest.split(end, 1)
new_section = """$section"""
new_txt = before + new_section + after
p.write_text(new_txt, encoding="utf-8")
PY
}

# git_operations
# --------------
# Handles git operations (commit and push) if changes are detected.
#
# Exit codes:
#   0   Success (no changes, or changes committed/pushed successfully)
#   1   Git operations failed (add, commit, or push failed)
git_operations() {
    if ! git status --porcelain | grep -q "$README_FILE"; then
        log_verbose "No README changes detected."
        return 0
    fi

    git add "$README_FILE" || return 1
    git commit -m "doc(readme): update exercism stats [skip ci]" || return 1
    log_verbose "README changes committed."

    if [[ $push == true ]]; then
        git push || return 1
        log_verbose "README updated and pushed."
    else
        log_verbose "README updated but not pushed."
    fi
}

# ------------------------------- Main Script ------------------------------- #

push=false
dry_run=false
verbose=false

while [[ "$#" -gt 0 ]]; do
    case "$1" in
    -p | --push) push=true ;;
    --dry-run) dry_run=true ;;
    -v | --verbose) verbose=true ;;
    -h | --help)
        print_help
        exit 0
        ;;
    *)
        echo "Unknown option: $1" >&2
        exit 1
        ;;
    esac
    shift
done

RECENT_LIMIT="${RECENT_LIMIT:-1}"
README_FILE="${README_FILE:-README.md}"
START_MARKER="${START_MARKER:-<!-- EXERCISE_STATS_START -->}"
END_MARKER="${END_MARKER:-<!-- EXERCISE_STATS_END -->}"

if ! validate_readme; then
    echo "Error: README file or markers missing" >&2
    exit 2
fi

read -r -a langs <<<"$(get_languages)"
section=$(generate_stats_section "${langs[@]}")

update_readme "$section"

if [[ $dry_run == false ]]; then
    git_operations
fi
