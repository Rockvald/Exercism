// @ts-check

/**
 * Retrieve card from cards array at the 0-based position.
 *
 * @param {number[]} cards The cards array
 * @param {number} position The 0-based position of the card to retrieve
 *
 * @returns {number} The card at the specified position
 */
export function getItem(cards, position) {
    return cards[position];
}

/**
 * Exchange card with replacementCard at the 0-based position.
 *
 * @param {number[]} cards The cards array
 * @param {number} position The 0-based position of the card to replace
 * @param {number} replacementCard The card to replace the one at the specified position
 *
 * @returns {number[]} The cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
    cards.splice(position, 1, replacementCard);
    return cards;
}

/**
 * Insert newCard at the end of the cards array.
 *
 * @param {number[]} cards The cards array
 * @param {number} newCard The card to insert at the top
 *
 * @returns {number[]} The cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
}

/**
 * Remove the card at the 0-based position.
 *
 * @param {number[]} cards The cards array
 * @param {number} position The 0-based position of the card to remove
 *
 * @returns {number[]} The cards without the removed card
 */
export function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}

/**
 * Remove card from the end of the cards array.
 *
 * @param {number[]} cards The cards array
 *
 * @returns {number[]} The cards without the removed card
 */
export function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}

/**
 * Insert newCard at beginning of the cards array.
 *
 * @param {number[]} cards The cards array
 * @param {number} newCard The card to insert at the bottom
 *
 * @returns {number[]} The cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}

/**
 * Remove card from the beginning of the cards.
 *
 * @param {number[]} cards The cards array
 *
 * @returns {number[]} The cards without the removed card
 */
export function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

/**
 * Compare the number of cards with the given stackSize.
 *
 * @param {number[]} cards The cards array
 * @param {number} stackSize The number of cards to compare against
 *
 * @returns {boolean} True if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
    return cards.length === stackSize;
}
