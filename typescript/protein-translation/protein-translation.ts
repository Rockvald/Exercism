/**
 * Amino acid list with their correspondig codons.
 */
const AMINO_ACIDS: Record<string, string[]> = {
    'Methionine': ['AUG'],
    'Phenylalanine': ['UUU', 'UUC'],
    'Leucine': ['UUA', 'UUG'],
    'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
    'Tyrosine': ['UAU', 'UAC'],
    'Cysteine': ['UGU', 'UGC'],
    'Tryptophan': ['UGG'],
    'STOP': ['UAA', 'UAG', 'UGA'],
};

/**
 * Translates RNA sequences into proteins.
 *
 * @param rna The RNA that contains the codons to translate.
 *
 * @returns The protein in the RNA.
 */
export function translate(rna: string): string[] {
    const codons = rna.match(/.{1,3}/g) || [];
    const protein = [];

    for (const codon in codons) {
        const aminoAcid = Object.keys(AMINO_ACIDS).find((aminoAcid) => AMINO_ACIDS[aminoAcid].includes(codons[codon]));

        if (!aminoAcid) {
            throw new Error('Invalid codon');
        }

        if (aminoAcid === 'STOP') {
            break;
        }

        protein.push(aminoAcid);
    }

    return protein;
}
