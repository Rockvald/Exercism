// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
    return `NCC-${generateRandomNumber(10000, 1000)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
    return generateRandomNumber(42000, 41000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
    const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
    return planetClasses[generateRandomNumber(planetClasses.length)];
}

/**
 * Generates a random number between a maximum and minimum value.
 *
 * @param {number} maximum The maximum value (exclusive).
 * @param {number} minimum The minimum value (inclusive).
 *
 * @returns {number} A random number between the minimum and maximum values.
 */
function generateRandomNumber(maximum, minimum = 0) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
