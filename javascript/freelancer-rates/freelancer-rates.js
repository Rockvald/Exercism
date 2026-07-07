// @ts-check

/**
 * The number of working hours in a day.
 *
 * @type {number}
 */
const WORK_HOURS_PER_DAY = 8;

/**
 * The number of working days in a month.
 *
 * @type {number}
 */
const WORK_DAYS_PER_MONTH = 22;

/**
 * The day rate, given a rate per hour.
 *
 * @param {number} ratePerHour The rate per hour
 *
 * @returns {number} The rate per day
 */
export function dayRate(ratePerHour) {
    return ratePerHour * WORK_HOURS_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down.
 *
 * @param {number} budget The total budget
 * @param {number} ratePerHour The rate per hour
 *
 * @returns {number} The number of days
 */
export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up.
 *
 * @param {number} ratePerHour The rate per hour
 * @param {number} numDays The number of days the project spans
 * @param {number} discount The discount rate, for example 20% written as 0.2
 *
 * @returns {number} The rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const ratePerDay = dayRate(ratePerHour);
    const remainingDays = numDays % WORK_DAYS_PER_MONTH;
    const fullMonthDays = numDays - remainingDays;

    return Math.ceil((fullMonthDays * ratePerDay) * (1 - discount) + remainingDays * ratePerDay);
}
