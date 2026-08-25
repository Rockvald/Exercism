/**
 * Manage robot factory settings.
 */
export class Robot {
    /**
     * The actual name of the robot.
     */
    protected actualName: string;

    /**
     * A set of all the names that have been used by robots.
     */
    protected static usedNames = new Set<string>();

    /**
     * Creates a new `Robot` instance.
     */
    constructor() {
        this.actualName = this.generateName();
    }

    /**
     * The name of the robot.
     */
    public get name(): string {
        return this.actualName;
    }

    /**
     * Resets the name of the robot to a new random name.
     */
    public resetName(): void {
        this.actualName = this.generateName();
    }

    /**
     * Releases all the names that have been used by robots.
     */
    public static releaseNames(): void {
        Robot.usedNames.clear();
    }

    /**
     * Generates a random name for the robot with two uppercase letters and a three digit number.
     */
    protected generateName(): string {
        let name: string;

        do {
            name = `${this.getRandomLetter()}${this.getRandomLetter()}${this.getRandomNumber()}`
        } while (Robot.usedNames.has(name));

        Robot.usedNames.add(name);

        return name;
    }

    /**
     * Returns a random uppercase letter.
     */
    protected getRandomLetter(): string {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        return letters[Math.floor(Math.random() * letters.length)];
    }

    /**
     * Returns a random three digit number.
     */
    protected getRandomNumber(): string {
        return (Math.floor(Math.random() * 1000)).toString().padStart(3, '0');
    }
}
