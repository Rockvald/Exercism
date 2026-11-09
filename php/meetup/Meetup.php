<?php

declare(strict_types=1);

/**
 * Calculate the exact date of a meetup.
 *
 * @param int $year The year of the meetup.
 * @param int $month The month of the meetup.
 * @param string $which The week (first, second, third, fourth, last, or teenth) of the meetup day.
 * @param string $weekday The day of the week of the meetup.
 *
 * @return DateTimeImmutable The exact date of the meetup.
 */
function meetup_day(int $year, int $month, string $which, string $weekday): DateTimeImmutable
{
    $date = new DateTimeImmutable("{$year}-{$month}-01");

    return match ($which) {
        "teenth" => $date->modify('+11 days')->modify("next {$weekday}"),
        default => $date->modify("{$which} {$weekday} of this month"),
    };
}
