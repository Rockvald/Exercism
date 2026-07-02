<?php

declare(strict_types=1);

/**
 * Represents a lasagna recipe and provides methods to calculate preparation and cooking times.
 */
class Lasagna
{
    protected const int OVEN_TIME = 40;
    protected const int LAYER_PREPARATION_TIME = 2;

    public function expectedCookTime(): int
    {
        return self::OVEN_TIME;
    }

    public function remainingCookTime(int $elapsedMinutes): int
    {
        return self::OVEN_TIME - $elapsedMinutes;
    }

    public function totalPreparationTime(int $layersToPrep): int
    {
        return $layersToPrep * self::LAYER_PREPARATION_TIME;
    }

    public function totalElapsedTime(int $layersToPrep, int $elapsedMinutes): int
    {
        return $this->totalPreparationTime($layersToPrep) + $elapsedMinutes;
    }

    public function alarm(): string
    {
        return "Ding!";
    }
}
