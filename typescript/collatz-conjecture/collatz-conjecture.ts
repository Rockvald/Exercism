/**
 * Calculate the number of steps required to reach 1 using the Collatz Conjecture.
 *
 * @param count A positive integer
 *
 * @returns The number of steps required to reach 1
 *
 * @throws An error if the number is not a positive integer
 */
export function steps(count: number): number {
    if (count <= 0 || !Number.isInteger(count)) {
        throw new Error('Only positive integers are allowed');
    }

    let steps = 0;

    while (count !== 1) {
        count = count % 2 === 0 ? count / 2 : (count * 3) + 1;
        steps++;
    }

    return steps;
}
