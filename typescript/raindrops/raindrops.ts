/**
 * Represents a map of numbers to their corresponding raindrop sounds.
 */
type RaindropSounds = {
    [key: string]: string;
};

/**
 * A map of numbers to their corresponding raindrop sounds.
 */
const raindropsMap: RaindropSounds = {
    '3': 'Pling',
    '5': 'Plang',
    '7': 'Plong',
};

/**
 * Converts a number into its corresponding raindrop sounds.
 * If the number has no corresponding raindrop sounds, the number itself is returned.
 *
 * @param number The number to convert.
 *
 * @returns The raindrop sounds corresponding to the number.
 */
export function convert(number: number): string {
    let result = '';

    for (const key of Object.keys(raindropsMap)) {
        if (number % +key === 0) {
            result += raindropsMap[key];
        }
    }

    if (result === '') {
        return number.toString()
    }

    return result;
}
