// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name The name of the juice to prepare
 *
 * @returns {number} Time in minutes
 */
export function timeToMixJuice(name) {
    let mixTime = 0;

    switch (name) {
        case 'Pure Strawberry Joy':
            mixTime = 0.5;
            break;
        case 'Energizer':
        case 'Green Garden':
            mixTime = 1.5;
            break;
        case 'Tropical Island':
            mixTime = 3;
            break;
        case 'All or Nothing':
            mixTime = 5;
            break;
        default:
            mixTime = 2.5;
    }

    return mixTime;
}

/**
 * Calculates the number of limes that need to be cut to reach a certain supply.
 *
 * @param {number} wedgesNeeded The number of wedges needed
 * @param {string[]} limes The list of limes available
 *
 * @returns {number} Number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let limesToCut = 0;
    let totalWedges = 0;

    while (totalWedges < wedgesNeeded && limesToCut < limes.length) {
        switch (limes[limesToCut]) {
            case 'small':
                totalWedges += 6;
                break;
            case 'medium':
                totalWedges += 8;
                break;
            case 'large':
                totalWedges += 10;
                break;
        }

        limesToCut++;
    }

    return limesToCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft The time left in the shift
 * @param {string[]} orders The list of orders to complete
 *
 * @returns {string[]} Remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    let spentTime = 0;

    do {
        let order = orders.shift();

        if (!order) {
            break;
        }

        spentTime += timeToMixJuice(order);
    } while (spentTime < timeLeft && orders.length > 0);

    return orders;
}
