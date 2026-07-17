/**
 * Formats the customer's name and ordinal number into a thank-you message.
 *
 * @param {string} name The customer's name
 * @param {number} number The ordinal number of the customer
 *
 * @returns {string} The formatted thank-you message
 */
export function format(name, number) {
    const suffix = getSuffix(number);
    return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};

/**
 * Returns the appropriate suffix for the given ordinal number.
 *
 * @param {number} number The ordinal number of the customer
 *
 * @returns {string} The suffix for the ordinal number
 */
function getSuffix(number) {
    if (number % 100 >= 11 && number % 100 <= 13) {
        return 'th';
    }

    switch (number % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}
