<?php

declare(strict_types=1);

/**
 * Convert a sequence of digits in one base, representing a number,
 * into a sequence of digits in another base, representing the same number.
 *
 * @param int $fromBase The base of the input digits
 * @param array $digits The input digits
 * @param int $toBase The base of the output digits
 *
 * @return array The output digits
 *
 * @throws InvalidArgumentException If the input base or output base is less than 2,
 *                                  or if any digit is out of range.
 */
function rebase(int $fromBase, array $digits, int $toBase): array
{
    if ($fromBase < 2) {
        throw new InvalidArgumentException('input base must be >= 2');
    }

    if ($toBase < 2) {
        throw new InvalidArgumentException('output base must be >= 2');
    }

    foreach ($digits as $digit) {
        if ($digit < 0 || $digit >= $fromBase) {
            throw new InvalidArgumentException('all digits must satisfy 0 <= d < input base');
        }
    }

    if (empty($digits)) {
        return [0];
    }

    $decimal = convertToDecimal($fromBase, $digits);

    return convertFromDecimalToBase($decimal, $toBase);
}

/**
 * Convert a sequence of digits in one base to a decimal number.
 *
 * @param int $fromBase The base of the input digits
 * @param array $digits The input digits
 *
 * @return int The decimal number
 */
function convertToDecimal(int $fromBase, array $digits): int
{
    $decimal = 0;

    foreach ($digits as $digit) {
        $decimal = $decimal * $fromBase + $digit;
    }

    return $decimal;
}

/**
 * Convert a decimal number to a sequence of digits in a given base.
 *
 * @param int $decimal The decimal number
 * @param int $toBase The base of the output digits
 *
 * @return array The output digits
 */
function convertFromDecimalToBase(int $decimal, int $toBase): array
{
    if ($decimal === 0) {
        return [0];
    }

    $result = [];

    while ($decimal > 0) {
        $result[] = $decimal % $toBase;
        $decimal = (int)($decimal / $toBase);
    }

    return array_reverse($result);
}
