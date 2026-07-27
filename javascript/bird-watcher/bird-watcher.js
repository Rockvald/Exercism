// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay The number of birds counted every day
 *
 * @returns {number} Total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let total = 0;

    for (let i = 0; i < birdsPerDay.length; i++) {
        total += birdsPerDay[i];
    }

    return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay The number of birds counted every day
 * @param {number} week The week number
 *
 * @returns {number} Birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    let total = 0;
    const start = (week - 1) * 7;
    const end = start + 7;

    for (let i = start; i < end; i++) {
        total += birdsPerDay[i];
    }

    return total;
}

/**
 * Fixes the counting mistake by increasing the bird count by one for every second day.
 *
 * @param {number[]} birdsPerDay The number of birds counted every day
 *
 * @returns {void}
 */
export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
        birdsPerDay[i]++;
    }
}
