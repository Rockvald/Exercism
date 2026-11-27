<?php

declare(strict_types=1);

/**
 * Determines whether a number is perfect using the Nicomachus classification scheme.
 * A number can be of the category perfect, abundant, or deficient based on its aliquot sum.
 *
 * @param int $number A positive number
 *
 * @return string The classification of the number.
 *
 * @throws InvalidArgumentException If the provided number is not a positive integer
 */
function getClassification(int $number): string
{
    if ($number < 1) {
        throw new InvalidArgumentException('Only positive integers allowed.');
    }

    $aliquot = 0;

    for ($i = 1; $i < $number; $i++) {
        if ($number % $i === 0) {
            $aliquot += $i;
        }
    }

    if ($aliquot === $number) {
        return 'perfect';
    } elseif ($aliquot > $number) {
        return 'abundant';
    }

    return 'deficient';
}
