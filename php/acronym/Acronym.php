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
    return str_replace('-', ' ', $text)
    |> ucwords(...)
    |> (fn(string $text) => explode(' ', $text))
    |> (fn(array $words) => array_map(fn(string $word) => mb_substr($word, 0, 1), $words))
    |> (fn(array $words) => implode('', $words));
}
