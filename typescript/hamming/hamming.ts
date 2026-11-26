/**
 * Calculates the Hamming distance between two DNA strands.
 *
 * @param left The first DNA strand to compare
 * @param right The second DNA strand to compare
 *
 * @returns The Hamming distance between the DNA strands.
 */
export function compute(left: string, right: string): number {
    if (left.length !== right.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    return [...left].filter((char, index) => char !== right[index]).length;
}
