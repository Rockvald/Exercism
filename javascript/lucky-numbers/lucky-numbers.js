// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1 The first array to sum
 * @param {number[]} array2 The second array to sum
 *
 * @returns {number} Sum of the two arrays
 */
export function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value The number to check
 *
 * @returns {boolean} Whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    return String(value) === [...String(value)].reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input The input value to check
 *
 * @returns {string} Error message
 */
export function errorMessage(input) {
    return !input
        ? 'Required field'
        : isNaN(Number(input)) || Number(input) <= 0
            ? 'Must be a number besides 0'
            : '';
}
