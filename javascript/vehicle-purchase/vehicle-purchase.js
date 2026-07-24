// @ts-check

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind The kind of vehicle
 *
 * @returns {boolean} Whether a license is required
 */
export function needsLicense(kind) {
    return ['car', 'truck'].includes(kind);
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1 The first option
 * @param {string} option2 The second option
 *
 * @returns {string} A sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    return option1.localeCompare(option2) < 0
        ? `${option1} is clearly the better choice.`
        : `${option2} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice The original price of the vehicle
 * @param {number} age The age of the vehicle
 *
 * @returns {number} Expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    return originalPrice * (age < 3 ? 0.8 : age > 10 ? 0.5 : 0.7);
}
