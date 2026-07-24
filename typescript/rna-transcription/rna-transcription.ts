/**
 * A mapping of DNA nucleotides to their corresponding RNA complements.
 * - G (Guanine) → C (Cytosine)
 * - C (Cytosine) → G (Guanine)
 * - T (Thymine) → A (Adenine)
 * - A (Adenine) → U (Uracil)
 */
enum NUCLEOTIDES {
    G = 'C',
    C = 'G',
    T = 'A',
    A = 'U',
}

/**
 * Represents a nucleotide in DNA.
 */
type Nucleotide = keyof typeof NUCLEOTIDES;

/**
 * Transcribes DNA to RNA by replacing each nucleotide with its complement.
 *
 * @param dna A string representing the DNA sequence to be transcribed
 *
 * @returns A string representing the RNA sequence
 */
export function toRna(dna: string): string {
    if (!/^[GCTA]+$/.test(dna)) {
        throw new Error('Invalid input DNA.');
    }

    return dna.replace(/./g, (nucleotide) => NUCLEOTIDES[nucleotide as Nucleotide]);
}
