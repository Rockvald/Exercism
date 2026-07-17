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
 * Represents one of the 10 standard resistor color bands.
 */
type Color = keyof typeof COLORS;

/**
 * Decodes a trio of resistor color bands into a numeric value.
 *
 * @param colors An array of three resistor color bands
 *
 * @returns The colors translated as a label
 */
export function decodedResistorValue([first, second, third]: Color[]): string {
    let number = Number(`${COLORS[first]}${COLORS[second]}`) * 10 ** COLORS[third];
    let metricPrefix = '';

    if (number >= 1e9) {
        number /= 1e9;
        metricPrefix = 'giga';
    } else if (number >= 1e6) {
        number /= 1e6;
        metricPrefix = 'mega';
    } else if (number >= 1e3) {
        number /= 1e3;
        metricPrefix = 'kilo';
    }

    return `${number} ${metricPrefix}ohms`;
}
