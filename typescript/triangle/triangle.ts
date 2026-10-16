/**
 * Represents a triangle with properties to determine its type.
 */
export class Triangle {
    /**
     * The third sides of the triangle.
     */
    protected sides: number[];

    /**
     * Creates a new `Triangle` instance.
     *
     * @param sides The sides of the triangle.
     */
    constructor(...sides: number[]) {
        if (sides.length !== 3) {
            throw new Error('Triangle must have 3 sides.');
        }

        this.sides = sides;
    }

    /**
     * Determines if the triangle inequality holds.
     *
     * The sum of the lengths of any two sides must be greater than or equal to the length of the remaining side.
     */
    public get isInequality(): boolean {
        const [a, b, c] = this.sides;
        return a + b >= c && a + c >= b && b + c >= a;
    }

    /**
     * Determines if the triangle is equilateral.
     *
     * All sides must be equal.
     */
    public get isEquilateral(): boolean {
        return this.isInequality
            && this.sides.every((side) => side > 0)
            && this.sides.every((side) => side === this.sides[0]);
    }

    /**
     * Determines if the triangle is isosceles.
     *
     * At least two sides must be equal.
     */
    public get isIsosceles(): boolean {
        return this.isInequality && this.sides.some((side) => this.sides.filter((s) => s === side).length >= 2);
    }

    /**
     * Determines if the triangle is scalene.
     *
     * All sides must be unequal.
     */
    public get isScalene(): boolean {
        return this.isInequality && this.sides.every((side) => this.sides.filter((s) => s === side).length === 1);
    }
}
