// @ts-check

/**
 * Constructs a new `Size` instance with width and height.
 *
 * @param {number} width The width of the size.
 * @param {number} height The height of the size.
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

/**
 * Resizes the size to the specified width and height.
 *
 * @param {number} width The new width of the size.
 * @param {number} height The new height of the size.
 *
 * @returns {void}
 */
Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
}

/**
 * Constructs a new `Position` instance with x and y coordinates.
 *
 * @param {number} x The x-coordinate of the position.
 * @param {number} y The y-coordinate of the position.
 */
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

/**
 * Moves the position to the specified x and y coordinates.
 *
 * @param {number} x The new x-coordinate of the position.
 * @param {number} y The new y-coordinate of the position.
 *
 * @returns {void}
 */
Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

/**
 * Represents a program window with methods to resize and move it.
 */
export class ProgramWindow {
    /**
     * Constructs a new `ProgramWindow` instance.
     */
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
     * Resizes the window to the specified size.
     *
     * @param {Size} size The new size of the window.
     *
     * @returns {void}
     */
    resize(size) {
        const width = Math.max(1, Math.min(size.width, this.screenSize.width - this.position.x));
        const height = Math.max(1, Math.min(size.height, this.screenSize.height - this.position.y));
        this.size.resize(width, height);
    }

    /**
     * Moves the window to the specified position.
     *
     * @param {Position} position The new position of the window.
     *
     * @returns {void}
     */
    move(position) {
        const x = Math.max(0, Math.min(position.x, this.screenSize.width - this.size.width));
        const y = Math.max(0, Math.min(position.y, this.screenSize.height - this.size.height));
        this.position.move(x, y);
    }
}

/**
 * Changes the window by resizing and moving it.
 *
 * @param {ProgramWindow} programWindow The program window to be changed.
 *
 * @returns {ProgramWindow} The changed program window.
 */
export function changeWindow(programWindow) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150);

    programWindow.resize(newSize);
    programWindow.move(newPosition);

    return programWindow;
}
