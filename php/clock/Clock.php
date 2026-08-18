<?php

declare(strict_types=1);

/**
 * Represents a clock that keeps track of the time since midnight.
 */
class Clock
{
    /**
     * The number of minutes since midnight.
     */
    protected readonly int $minutes;

    /**
     * Creates a new Clock instance with the specified hours and minutes.
     *
     * @param int $hours The number of hours since midnight.
     * @param int $minutes The number of minutes since midnight.
     */
    public function __construct(int $hours, int $minutes = 0)
    {
        $calculatedMinutes = $hours * 60 + $minutes;
        $calculatedMinutes %= 1440;

        if ($calculatedMinutes < 0) {
            $calculatedMinutes += 1440;
        }

        $this->minutes = $calculatedMinutes;
    }

    /**
     * Adds the specified number of minutes to the clock.
     *
     * @param int $minutes The number of minutes to add.
     *
     * @return self A new Clock instance with the updated time.
     */
    public function add(int $minutes): self
    {
        return new self(0, $this->minutes + $minutes);
    }

    /**
     * Subtracts the specified number of minutes from the clock.
     *
     * @param int $minutes The number of minutes to subtract.
     *
     * @return self A new Clock instance with the updated time.
     */
    public function sub(int $minutes): self
    {
        return $this->add(-$minutes);
    }

    /**
     * Returns the clock time as a string in the format "HH:MM".
     *
     * @return string The clock time as a string.
     */
    public function __toString(): string
    {
        return sprintf('%02d:%02d', intdiv($this->minutes, 60), $this->minutes % 60);
    }
}
