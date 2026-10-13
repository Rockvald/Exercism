// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck The deck of cards to double
 *
 * @returns {number[]} The deck with every card doubled
 */
export function seeingDouble(deck) {
    return deck.map(card => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck The deck of cards to triple tripletres of 3s
 *
 * @returns {number[]} The deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
    return deck.flatMap((card) => card === 3 ? [card, card, card] : [card]);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck A deck of 10 cards
 *
 * @returns {number[]} The deck with only two middle cards
 */
export function middleTwo(deck) {
    const middle = deck.length / 2;
    return deck.slice(middle - 1, middle + 1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck A deck with even number of cards
 *
 * @returns {number[]} The transformed deck
 */
export function sandwichTrick(deck) {
    const middleDeck = deck.slice(1, -1);
    middleDeck.splice(middleDeck.length / 2, 0, deck[deck.length - 1], deck[0]);

    return middleDeck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck A deck of cards
 *
 * @returns {number[]} The deck with only 2s
 */
export function twoIsSpecial(deck) {
    return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck A shuffled deck
 *
 * @returns {number[]} The ordered deck
 */
export function perfectlyOrdered(deck) {
    return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck A deck of cards
 *
 * @returns {number[]} The reordered deck
 */
export function reorder(deck) {
    return deck.reverse();
}
