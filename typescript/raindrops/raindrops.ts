/**
 * Converts a number into its corresponding raindrop sounds.
 * If the number has no corresponding raindrop sounds, the number itself is returned.
 *
 * @param number The number to convert.
 *
 * @returns The raindrop sounds corresponding to the number.
 */
export function convert(number: number): string {
    let result = "";

    if (number % 3 === 0) {
        result += "Pling";
    }

    if (number % 5 === 0) {
        result += "Plang";
    }

    if (number % 7 === 0) {
        result += "Plong";
    }

    if (result === "") {
        result = number.toString();
    }

    return result;
}
