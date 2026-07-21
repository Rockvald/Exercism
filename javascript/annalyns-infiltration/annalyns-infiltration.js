/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake Whether the knight is awake
 *
 * @return {boolean} Whether or not you can execute a fast attack
 */
export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake Whether the knight is awake
 * @param {boolean} archerIsAwake Whether the archer is awake
 * @param {boolean} prisonerIsAwake Whether the prisoner is awake
 *
 * @returns {boolean} Whether or not you can spy on someone
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake Whether the archer is awake
 * @param {boolean} prisonerIsAwake Whether the prisoner is awake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return prisonerIsAwake && !archerIsAwake;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake Whether the knight is awake
 * @param {boolean} archerIsAwake Whether the archer is awake
 * @param {boolean} prisonerIsAwake Whether the prisoner is awake
 * @param {boolean} petDogIsPresent Whether the pet dog is present
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend
 */
export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
) {
    return (petDogIsPresent && !archerIsAwake)
        || (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
