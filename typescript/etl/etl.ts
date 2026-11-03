/**
 * Transforms the old data format of letters and their point values into a new format.
 *
 * @param oldFormat The old data format of letters and their point values.
 *
 * @returns The new format with each individual letter with its score in a one-to-one mapping.
 */
export function transform(oldFormat: Record<string, string[]>): Record<string, number> {
    const newFormat: Record<string, number> = {};

    for (const score in oldFormat) {
        oldFormat[score].forEach(letter => {
            newFormat[letter.toLowerCase()] = Number(score);
        });
    }

    return newFormat;
}
