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
    $letters = range('A', $letter);
    $letters = array_merge($letters, array_reverse(array_slice($letters, 0, -1)));

    $maxLength = count($letters);

    $diamond = [];
    foreach ($letters as $diamondLetter) {
        if ($diamondLetter === 'A') {
            $startEndSpaces = str_repeat(' ', ($maxLength -  1) / 2);
            $diamond[] = $startEndSpaces . $diamondLetter . $startEndSpaces;
            continue;
        }

        $letterIndex = array_find_key($letters, fn($letter) => $letter === $diamondLetter);
        $middleSpaces = str_repeat(' ', ($letterIndex * 2) - 1);
        $startEndSpaces = str_repeat(' ', (int) floor(($maxLength - strlen($middleSpaces) - 2)) / 2);

        $diamond[] = $startEndSpaces . $diamondLetter . $middleSpaces . $diamondLetter . $startEndSpaces;
    }

    return $diamond;
}
