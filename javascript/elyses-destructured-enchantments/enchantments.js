/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck.
 *
 * @param {Card[]} deck The deck of cards
 *
 * @returns {Card} The first card in the deck
 */
export function getFirstCard([firstCard]) {
    return firstCard;
}

/**
 * Get the second card in the given deck.
 *
 * @param {Card[]} deck The deck of cards
 *
 * @returns {Card} The second card in the deck
 */
export function getSecondCard([, secondCard]) {
    return secondCard;
}

/**
 * Switch the position of the two cards.
 *
 * @param {[Card, Card]} deck The deck of cards
 *
 * @returns {[Card, Card]} New deck with the 2 cards swapped
 */
export function swapTwoCards([firstCard, secondCard]) {
    return [secondCard, firstCard];
}

/**
 * Rotate (shift) the position of the three cards (by one place).
 *
 * @param {[Card, Card, Card]} deck The deck of cards
 *
 * @returns {[Card, Card, Card]} New deck with the 3 cards shifted by one position
 */
export function shiftThreeCardsAround([firstCard, secondCard, thirdCard]) {
    return [secondCard, thirdCard, firstCard];
}

/**
 * Grab the chosen pile from the available piles.
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles The available piles
 *
 * @returns {Card[]} The pile named chosen
 */
export function pickNamedPile({ chosen }) {
    return chosen;
}

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile.
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles The available piles
 *
 * @returns {{ chosen: Card[], disregarded: Card[] }} New piles where the two piles are swapped
 */
export function swapNamedPile({ disregarded: chosen, chosen: disregarded }) {
    return { chosen, disregarded };
}
