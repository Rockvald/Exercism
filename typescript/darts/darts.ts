/**
 * Calculates the score for a dart throw based on the dart's position.
 *
 * @param x The x-coordinate of the dart's position
 * @param y The y-coordinate of the dart's position
 *
 * @returns The score for the dart throw
 */
export function score(x: number, y: number): number {
    const dartPosition = Math.sqrt(x ** 2 + y ** 2);

    if (dartPosition <= 1) {
        return 10;
    } else if (dartPosition <= 5) {
        return 5;
    } else if (dartPosition <= 10) {
        return 1;
    }

    return 0;
}
