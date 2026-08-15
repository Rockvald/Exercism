<?php

declare(strict_types=1);

/**
 * Encodes a given text using the Atbash cipher.
 *
 * @param string $text The text to encode.
 *
 * @return string The encoded text.
 */
function encode(string $text): string
{
    $encodedText = array_map(
        'reverseChar',
        str_split(mb_strtolower(preg_replace('/[\W\s]+/', '', $text)))
    );

    return implode(
        ' ',
        array_map(
            fn(array $chunk) => implode('', $chunk),
            array_chunk($encodedText, 5)
        )
    );
}

/**
 * Decodes a given text using the Atbash cipher.
 *
 * @param string $text The text to decode.
 *
 * @return string The decoded text.
 */
function decode(string $text): string
{
    $decodedText = array_map('reverseChar', str_split(str_replace(' ', '', $text)));

    return implode('', $decodedText);
}

/**
 * Reverses a character using the Atbash cipher.
 *
 * @param string $char The character to reverse.
 *
 * @return string The reversed character.
 */
function reverseChar(string $char): string
{
    $alphabet = array_combine(range('a', 'z'), array_reverse(range('a', 'z')));

    if (ctype_alpha($char)) {
        return $alphabet[$char];
    }

    return $char;
}
