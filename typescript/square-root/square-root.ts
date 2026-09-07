/**
 * Calculates the square of root of a given number using the Heron's method.
 *
 * @param radicand A positive whole number.
 *
 * @returns The square root of the number, rounded down.
 */
export function squareRoot(radicand: number): number {
    let guess = radicand;

    while (true) {
        const next = (guess + (radicand / guess)) / 2;

        if (Math.abs(guess - next) < 1e-10) {
            return Math.floor(guess);
        }

        guess = next;
    }
}
