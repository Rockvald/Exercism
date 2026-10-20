// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack The stack of cards
 * @param {number} card The card to find in the stack
 *
 * @returns {number} The position of the card in the stack
 */
export function getCardPosition(stack, card) {
    return stack.indexOf(card);
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack The stack of cards
 * @param {number} card The card to find in the stack
 *
 * @returns {boolean} True if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack The stack of cards
 *
 * @returns {boolean} True if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
    return stack.every((card) => card % 2 === 0);
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack The stack of cards
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
    return stack.some((card) => card % 2 !== 0);
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack The stack of cards
 *
 * @returns {number | undefined} The first odd value
 */
export function getFirstOddCard(stack) {
    return stack.find((card) => card % 2 !== 0);
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack The stack of cards
 *
 * @returns {number} The position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
    return stack.findIndex((card) => card % 2 === 0);
}
