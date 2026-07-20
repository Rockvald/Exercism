<?php

/**
 * Transforms a list of language names into an array.
 *
 * @param null|string ...$languages The language names to transform
 *
 * @return array The array of language names
 */
function language_list(?string ...$languages): array
{
    return $languages ?: [];
}

/**
 * Adds a language to a language list.
 *
 * @param array $languages The language list to add to
 * @param string $language The new language to add
 *
 * @return array The updated language list
 */
function add_to_language_list(array $languages, string $language): array
{
    return array_merge($languages, [$language]);
}

/**
 * Removes the first language from a language list.
 *
 * @param array $languages The language list to remove from
 *
 * @return array The updated language list
 */
function prune_language_list(array $languages): array
{
    return array_splice($languages, 1);
}

/**
 * Gets the first language from a language list.
 *
 * @param array $languages The language list to get the first language from
 *
 * @return string The first language
 */
function current_language(array $languages): string
{
    return reset($languages);
}

/**
 * Gets the number of languages in a language list.
 *
 * @param array $languages The language list to get the length of
 *
 * @return int The length of the language list
 */
function language_list_length(array $languages): int
{
    return count($languages);
}
