<?php

/**
 * Represents the position of a window on the screen.
 */
class Position
{
    /**
     * The y-coordinate of the position.
     */
    public readonly int $y;

    /**
     * The x-coordinate of the position.
     */
    public readonly int $x;

    /**
     * Creates a new Position instance.
     *
     * @param int $y The y-coordinate of the position
     * @param int $x The x-coordinate of the position
     */
    public function __construct(int $y, int $x)
    {
        $this->y = $y;
        $this->x = $x;
    }
}
