<?php

declare(strict_types=1);

/**
 * Converts a text into an acronym by extracting the first letter of each word.
 *
 * @param string $text The text to convert
 *
 * @return string The acronym generated from the text
 */
function acronym(string $text): string
{
    $text = ucwords(str_replace('-', ' ', $text));
    $words = explode(' ', $text);
    $words = array_map(fn(string $word) => mb_substr($word, 0, 1), $words);

    return implode('', $words);
}
