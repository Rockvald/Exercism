<?php

declare(strict_types=1);

function steps(int $number): int
{
    if ($number <= 0) {
        throw new \InvalidArgumentException('Only positive integers are allowed');
    }

    $count = 0;

    while ($number != 1) {
        if ($number % 2 == 0) {
            $number /= 2;
        } elseif ($number % 2 == 1) {
            $number = ($number * 3) + 1;
        }

        $count++;
    }

    return $count;
}
