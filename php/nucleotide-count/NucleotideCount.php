<?php

declare(strict_types=1);

/**
 * Count the number of each nucleotide in a DNA string.
 *
 * @param string $input The DNA string to count nucleotides in.
 *
 * @return array An associative array with the count of each nucleotide.
 *
 * @throws InvalidArgumentException If the input string contains invalid nucleotides.
 */
function nucleotideCount(string $input): array
{
    if (preg_match('/[^ACGT]/', $input)) {
        throw new InvalidArgumentException('Invalid nucleotide');
    }

    return [
        'a' => substr_count($input, 'A'),
        'c' => substr_count($input, 'C'),
        't' => substr_count($input, 'T'),
        'g' => substr_count($input, 'G'),
    ];
}
