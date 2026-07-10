/**
 * The 10 standard resistor color of digits bands in order, from lowest to highest value.
 * Each color corresponds to a digit (0-9) based on its index.
 */
const COLORS = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
}

/**
 * Decodes a pair of resistor color bands into a numeric value.
 *
 * @param colors An array of two resistor color bands
 *
 * @returns The decoded value of the resistor color bands as a number
 */
export function decodedValue([first, second]: Array<keyof typeof COLORS>) {
    return Number(`${COLORS[first]}${COLORS[second]}`);
}
