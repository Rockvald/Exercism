// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck.
 *
 * @param {number[]} stack The stack of cards to search through.
 * @param {number} cardType The card type to search for.
 *
 * @returns {number} The number of cards of a single type there are in the deck.
 */
export function cardTypeCheck(stack, cardType) {
    let count = 0;

    stack.forEach(card => {
        count += card === cardType ? 1 : 0
    });

    return count;
}

/**
 * Determine how many cards are odd or even.
 *
 * @param {number[]} stack The stack of cards to search through.
 * @param {boolean} type The type of value to check for - odd or even.
 *
 * @returns {number} The number of cards that are either odd or even (depending on `type`).
 */
export function determineOddEvenCards(stack, type) {
    const rest = type ? 0 : 1;
    let count = 0;

    for (const card of stack) {
        if (card % 2 === rest) {
            count++;
        }
    }

    return count;
}
