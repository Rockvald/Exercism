/**
 * Determines if a sentence is a pangram (contains every letter of the alphabet).
 *
 * @param sentence The sentence to check.
 *
 * @returns `true` if the sentence is a pangram, `false` otherwise.
 */
export function isPangram(sentence: string): boolean {
    const letters = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''))

    return letters.size === 26;
}
