<?php

declare(strict_types=1);

/**
 * Encodes a plaintext string into a ciphertext string using the Crypto Square method.
 *
 * @param string $plaintext The plaintext to encode.
 *
 * @return string The encoded text in chunks that fill perfect rectangles.
 */
function crypto_square(string $plaintext): string
{
    $normalizedText = preg_replace('/[^a-z0-9]/', '', strtolower($plaintext));

    if ($normalizedText === '') {
        return '';
    }

    $length = strlen($normalizedText);
    $columns = (int) ceil(sqrt($length));
    $rows = (int) ceil($length / $columns);

    $normalizedText = str_pad($normalizedText, $rows * $columns, ' ');

    $chunks = str_split($normalizedText, $columns);

    $result = [];
    for ($i = 0; $i < $columns; $i++) {
        $result[] = implode('', array_map(fn ($chunk) => $chunk[$i] ?? '', $chunks));
    }

    return implode(' ', $result);
}
