<?php

/**
 * Represents the size of a window.
 */
class Size
{
    /**
     * The height of the window.
     */
    public readonly int $height;

    /**
     * The width of the window.
     */
    public readonly int $width;

    /**
     * Creates a new Size instance.
     *
     * @param int $height The height of the window
     * @param int $width The width of the window
     */
    public function __construct(int $height, int $width)
    {
        $this->height = $height;
        $this->width = $width;
    }
}
