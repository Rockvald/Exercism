<?php

declare(strict_types=1);

/**
 * Represents a lasagna recipe and provides methods to calculate preparation and cooking times.
 */
class Lasagna
{
    /**
     * The expected oven time in minutes for the lasagna.
     */
    protected const int OVEN_TIME = 40;

    /**
     * The time in minutes it takes to prepare a single layer of the lasagna.
     */
    protected const int LAYER_PREPARATION_TIME = 2;

    /**
     * Returns the expected time the lasagna should be in the oven, based on the recipe.
     *
     * @return int The expected oven time in minutes for the lasagna.
     */
    public function expectedCookTime(): int
    {
        return self::OVEN_TIME;
    }

    /**
     * Calculate the remaining time the lasagna should be in the oven.
     *
     * @param int $elapsedMinutes The number of minutes the lasagna has been in the oven.
     *
     * @return int The remaining time in the oven in minutes.
     */
    public function remainingCookTime(int $elapsedMinutes): int
    {
        return self::OVEN_TIME - $elapsedMinutes;
    }

    /**
     * Calculate the total preparation time for a given number of layers.
     *
     * @param int $layersToPrep The number of layers added to the lasagna.
     *
     * @return int The total preparation time in minutes.
     */
    public function totalPreparationTime(int $layersToPrep): int
    {
        return $layersToPrep * self::LAYER_PREPARATION_TIME;
    }

    /**
     * Calculate the total elapsed time for a given number of layers and elapsed minutes.
     *
     * @param int $layersToPrep The number of layers added to the lasagna.
     * @param int $elapsedMinutes The number of minutes the lasagna has been in the oven.
     *
     * @return int The total elapsed time in minutes.
     */
    public function totalElapsedTime(int $layersToPrep, int $elapsedMinutes): int
    {
        return $this->totalPreparationTime($layersToPrep) + $elapsedMinutes;
    }

    /**
     * Returns a message indicating that the lasagna is ready to eat.
     *
     * @return string The message indicating the lasagna is ready.
     */
    public function alarm(): string
    {
        return "Ding!";
    }
}
