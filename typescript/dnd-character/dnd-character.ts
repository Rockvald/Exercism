/**
 * Represents a DnD character with ability scores and hitpoints.
 */
export class DnDCharacter {
    /**
     * The character's hitpoints.
     */
    public hitpoints: number = 10;

    /**
     * The character's strength ability score.
     */
    public strength: number;

    /**
     * The character's dexterity ability score.
     */
    public dexterity: number;

    /**
     * The character's constitution ability score.
     */
    public constitution: number;

    /**
     * The character's intelligence ability score.
     */
    public intelligence: number;

    /**
     * The character's wisdom ability score.
     */
    public wisdom: number;

    /**
     * The character's charisma ability score.
     */
    public charisma: number;

    /**
     * Construct a new `DnDCharacter` instance.
     */
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints += DnDCharacter.getModifierFor(this.constitution);
    }

    /**
     * Generate a random ability score for the character.
     *
     * @returns An ability score between 3 and 18
     */
    public static generateAbilityScore(): number {
        const diceThrows = Array.from({ length: 4 }, () => DnDCharacter.rollSixSidedDie());
        const smallestValueIndex = diceThrows.indexOf(Math.min(...diceThrows));
        diceThrows.splice(smallestValueIndex, 1);

        return diceThrows.reduce((abilityScore, dieValue) => abilityScore + dieValue, 0);
    }

    /**
     * Get the modifier for an ability value.
     *
     * @param abilityValue The ability value to calculate the modifier for
     *
     * @returns The modifier for the given ability value
     */
    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }

    /**
     * Roll a six-sided die to generate a random value.
     *
     * @returns A random value between 1 and 6
     */
    protected static rollSixSidedDie(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}
