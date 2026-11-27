<?php

declare(strict_types=1);

/**
 * The Nicomachus classification of a positive integer, based on its aliquot sum
 * (the sum of its proper divisors, i.e. all divisors excluding the number itself).
 *
 * - Perfect: the aliquot sum equals the number (e.g. 6 = 1 + 2 + 3)
 * - Abundant: the aliquot sum is greater than the number (e.g. 12)
 * - Deficient: the aliquot sum is less than the number (e.g. 8)
 */
enum Classification: string
{
    case Perfect = 'perfect';
    case Abundant = 'abundant';
    case Deficient = 'deficient';

    /**
     * Classifies a number by comparing it with its aliquot sum.
     *
     * @param int $number The number being classified
     * @param int $aliquotSum The sum of the proper divisors of $number
     *
     * @return self The classification of $number
     */
    public static function fromAliquotSum(int $number, int $aliquotSum): self
    {
        return match (true) {
            $aliquotSum === $number => self::Perfect,
            $aliquotSum > $number => self::Abundant,
            default => self::Deficient,
        };
    }
}

/**
 * Determines whether a number is perfect using the Nicomachus classification scheme.
 * A number can be of the category perfect, abundant, or deficient based on its aliquot sum.
 *
 * @param int $number A positive integer
 *
 * @return string The classification of the number ('perfect', 'abundant' or 'deficient')
 *
 * @throws InvalidArgumentException If the provided number is not a positive integer
 */
function getClassification(int $number): string
{
    if ($number < 1) {
        throw new InvalidArgumentException('Only positive integers allowed.');
    }

    return Classification::fromAliquotSum($number, aliquotSum($number))->value;
}

/**
 * Computes the aliquot sum of a positive integer, the sum of its proper divisors.
 *
 * Runs in O(√n) instead of O(n) by exploiting the fact that divisors come in
 * pairs: whenever $i divides $number, so does $number / $i. Iterating only up
 * to √$number and adding both members of each pair covers all divisors.
 *
 * @param int $number A positive integer
 *
 * @return int The sum of the proper divisors of $number
 */
function aliquotSum(int $number): int
{
    // 1 has no proper divisors, so its aliquot sum is 0.
    if ($number === 1) {
        return 0;
    }

    $sum = 1;

    for ($i = 2; $i * $i <= $number; $i++) {
        if ($number % $i === 0) {
            $sum += $i;

            $pair = intdiv($number, $i);

            // For perfect squares (e.g. 16 and $i = 4), the pair is the same divisor
            if ($pair !== $i) {
                $sum += $pair;
            }
        }
    }

    return $sum;
}
