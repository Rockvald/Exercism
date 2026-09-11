<?php

declare(strict_types=1);

/**
 * Creates a diamond shape from the letters 'A' up to the provided letter.
 *
 * @param string $letter A capital letter to take as widest point.
 *
 * @return array A symmetric diamond shape with the letter 'A' on the first and last rows,
 * and other rows with two letters up to the supplied letter.
 */
function diamond(string $letter): array
{
    $letters = implode('', range('A', $letter));
    $reversedLetters = strrev($letters);
    $letters = $reversedLetters . substr($letters, 1);

    $diamond = [];
    foreach (str_split($reversedLetters) as $letterIndex => $diamondLetter) {
        $row = preg_replace("/[^$diamondLetter]/", ' ', $letters);
        $diamond[] = $row;

        if ($letterIndex === 0) {
            continue;
        }

        array_unshift($diamond, $row);
    }

    return $diamond;
}
