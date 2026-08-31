/**
 * Provides utilities for calculating dates relative to a given point in time using a gigasecond interval.
 */
export class Gigasecond {
    /**
     * @param initialDate The initial date and time from which the gigasecond will be calculated.
     */
    constructor(private readonly initialDate: Date) { }

    /**
     * Calculates the date and time after adding one gigasecond to the initial date.
     *
     * @returns The initial date plus one gigasecond.
     */
    public date(): Date {
        return new Date(this.initialDate.getTime() + 1_000_000_000_000);
    }
}
