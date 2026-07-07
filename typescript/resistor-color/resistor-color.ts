/**
 * The 10 standard resistor color of digits bands in order, from lowest to highest value.
 * Each color corresponds to a digit (0-9) based on its index.
 */
export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];

/**
 * Returns the numeric value associated with a resistor color band.
 *
 * @param color The color of the resistor band
 *
 * @returns The numeric code (0-9) for the color. Returns -1 if the color is not found.
 */
export function colorCode(color: string): number {
    return COLORS.indexOf(color);
}
