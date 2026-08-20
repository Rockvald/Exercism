/**
 * A class that calculates the difference of squares for a given count of natural numbers.
 */
export class Squares {
    /**
     * Creates a new `Squares` instance with the specified count of natural numbers.
     *
     * @param count The count of natural numbers to use for the calculations.
     */
    constructor(protected count: number) { }

    /**
     * The sum of the squares of the first `count` natural numbers.
     */
    get sumOfSquares(): number {
        return Array.from({ length: this.count }, (_, index) => (index + 1) ** 2)
            .reduce((total, square) => total + square, 0);
    }

    /**
     * The square of the sum of the first `count` natural numbers.
     */
    get squareOfSum(): number {
        return Array.from({ length: this.count }, (_, index) => index + 1)
            .reduce((total, number) => total + number, 0) ** 2;
    }

    /**
     * The difference between the square of the sum and the sum of the squares of the first `count` natural numbers.
     */
    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}
