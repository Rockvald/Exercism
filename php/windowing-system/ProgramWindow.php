<?php

/**
 * Defines a program window with a position, size, and methods for resizing and moving.
 */
class ProgramWindow
{
    /**
     * The y-coordinate of the window's position.
     *
     * @var int
     */
    public $y;

    /**
     * The x-coordinate of the window's position.
     *
     * @var int
     */
    public $x;

    /**
     * The height of the window.
     *
     * @var int
     */
    public $height;

    /**
     * The width of the window.
     *
     * @var int
     */
    public $width;

    /**
     * Constructs a new ProgramWindow with default position and size.
     */
    public function __construct()
    {
        $this->y = 0;
        $this->x = 0;
        $this->height = 600;
        $this->width = 800;
    }

    /**
     * Resizes the window to the specified size.
     *
     * @param Size $size The new size of the window
     *
     * @return void
     */
    public function resize(Size $size): void
    {
        $this->height = $size->height;
        $this->width = $size->width;
    }

    /**
     * Moves the window to the specified position.
     *
     * @param Position $position The new position of the window
     *
     * @return void
     */
    public function move(Position $position): void
    {
        $this->y = $position->y;
        $this->x = $position->x;
    }
}
