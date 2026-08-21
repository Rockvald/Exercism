<?php

declare(strict_types=1);

/**
 * Calculate the number of steps required to reach 1 using the Collatz Conjecture.
 *
 * @param int $number A positive integer
 *
 * @return int The number of steps required to reach 1
 *
 * @throws InvalidArgumentException If the number is not a positive integer
 */
function steps(int $number): int
{
    if ($number <= 0) {
        throw new \InvalidArgumentException('Only positive integers are allowed');
    }

    $steps = 0;

    while ($number != 1) {
        $number = ($number % 2 == 0) ? $number / 2 : ($number * 3) + 1;
        $steps++;
    }

    return $steps;
}
