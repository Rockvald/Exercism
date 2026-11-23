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

    $count = [
        'a' => 0,
        'c' => 0,
        't' => 0,
        'g' => 0,
    ];

    foreach (str_split(strtolower($input)) as $char) {
        $count[$char]++;
    }

    return $count;
}
