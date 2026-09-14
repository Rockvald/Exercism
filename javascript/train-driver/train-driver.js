// @ts-check

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids The wagon ids
 *
 * @returns {number[]} Wagon ids
 */
export function getListOfWagons(...ids) {
    return ids;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids The wagon ids
 *
 * @returns {number[]} Reordered list of wagons
 */
export function fixListOfWagons(ids) {
    const [firstWagon, secondWagon, ...otherWagons] = ids;
    return [...otherWagons, firstWagon, secondWagon];
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids The wagon ids
 * @param {Iterable<number>} missingWagons The missing wagon ids
 *
 * @returns {number[]} Corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
    const [firstWagon, ...endingWagons] = ids;
    return [firstWagon, ...missingWagons, ...endingWagons];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information The route information
 * @param {Record<string, string>} additional The additional information
 *
 * @returns {Record<string, string>} Extended route information
 */
export function extendRouteInformation(information, additional) {
    return { ...information, ...additional };
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information The route information
 *
 * @returns {[string, Record<string, string>]} Array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
    const { timeOfArrival, ...routeInformations } = information;
    return [timeOfArrival, routeInformations];
}
