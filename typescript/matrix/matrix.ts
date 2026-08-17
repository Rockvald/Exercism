/**
 * This class allow to transform a string representing a matrix into a matrix of numbers.
 */
export class Matrix {
    /**
     * Represents a matrix as a 2D array of numbers.
     */
    protected matrix: number[][];

    /**
     * Creates a new Matrix instance from a string representation.
     *
     * @param matrix The string representation of the matrix.
     */
    constructor(matrix: string) {
        this.matrix = matrix.split('\n').map(
            row => row.split(' ').map(Number)
        );
    }

    /**
     * The rows of the matrix as a 2D array.
     */
    public get rows(): number[][] {
        return this.matrix;
    }

    /**
     * The columns of the matrix as a 2D array.
     */
    public get columns(): number[][] {
        return this.matrix[0]?.map((_, colIndex) =>
            this.matrix.map(row => row[colIndex])
        ) || [];
    }
}
