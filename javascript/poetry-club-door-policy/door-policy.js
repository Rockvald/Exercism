// @ts-check

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line The line of the poem
 *
 * @returns {string} The first letter of the poem line
 */
export function frontDoorResponse(line) {
    return line.trim()[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} password The letters you responded with before
 *
 * @returns {string} The capitalized version of the password
 */
export function frontDoorPassword(password) {
    return password.charAt(0).toUpperCase() + password.slice(1).toLowerCase();
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line The line of the poem
 *
 * @returns {string} The last letter of the poem line
 */
export function backDoorResponse(line) {
    return line.trim().slice(-1);
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word The letters you responded with before
 *
 * @returns {string} The polite version of the capitalized password
 */
export function backDoorPassword(word) {
    return `${frontDoorPassword(word)}, please`;
}
