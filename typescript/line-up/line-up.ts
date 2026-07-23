/**
 * Formats the customer's name and ordinal number into a thank-you message.
 *
 * @param name The customer's name
 * @param number The ordinal number of the customer
 *
 * @returns The formatted thank-you message
 */
export function format(name: string, number: number): string {
    const suffix = getSuffix(number);
    return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}

/**
 * Returns the appropriate suffix for the given ordinal number.
 *
 * @param number The ordinal number of the customer
 *
 * @returns The suffix for the ordinal number
 */
function getSuffix(number: number): string {
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
