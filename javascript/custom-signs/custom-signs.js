// @ts-check

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion The occasion for the sign
 * @param {string} name The name to include on the sign
 *
 * @returns {string} Template string combining both parameters
 */
export function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`;
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age The age of the person
 *
 * @returns {string} Template string based on age
 */
export function buildBirthdaySign(age) {
    return `Happy Birthday! What a ${age < 50 ? 'young' : 'mature'} fellow you are.`;
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name The name of the person
 * @param {number} year The year of graduation
 *
 * @returns {string} Multi-line template string
 */
export function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`;
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign The sign text
 * @param {string} currency The currency to use for the cost
 *
 * @returns {string} Cost to create the sign
 */
export function costOf(sign, currency) {
    return `Your sign costs ${calculateCost(sign).toFixed(2)} ${currency}.`;
}

/**
 * Calculate the cost of a sign.
 *
 * @param {string} sign Text of the sign
 *
 * @returns {number} Cost of the sign
 */
function calculateCost(sign) {
    return 20 + (sign.length * 2);
}
