/**
 * Counts how many times each word occurs in a phrase.
 *
 * @param phrase The phrase to count words in.
 *
 * @returns A map where keys are words and values are the number of occurrences.
 */
export function count(phrase: string) {
    const words = phrase.replace(/\s+/g, ' ').match(/(\b[^\s,]+\b)/g) ?? [];
    const wordsCounts = new Map<string, number>();

    for (const word of words) {
        const normalizedWord = word.toLowerCase();
        const wordcount = wordsCounts.get(normalizedWord) ?? 0;

        wordsCounts.set(normalizedWord, wordcount + 1);
    }

    return wordsCounts;
}
