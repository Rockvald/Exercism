/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name The visitor's name
 * @param {number} age The visitor's age
 * @param {string} ticketId The visitor's ticket ID
 *
 * @returns {Visitor} The visitor that was created
 */
export function createVisitor(name, age, ticketId) {
    return { name, age, ticketId };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor The visitor with an active ticket
 *
 * @returns {Visitor} The visitor without a ticket
 */
export function revokeTicket(visitor) {
    if (visitor.ticketId !== null) {
        visitor.ticketId = null;
    }

    return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets The ticket tracking object
 * @param {string} ticketId The ticket ID to check
 *
 * @returns {string} Ticket status
 */
export function ticketStatus(tickets, ticketId) {
    const ticketStatus = tickets[ticketId];

    return ticketStatus !== undefined
        ? ticketStatus !== null
            ? `sold to ${ticketStatus}`
            : 'not sold'
        : 'unknown ticket id';
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets The ticket tracking object
 * @param {string} ticketId The ticket ID to check
 *
 * @returns {string} Ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
    return tickets[ticketId] ?? 'invalid ticket !!!';
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor The visitor with a GTC
 *
 * @returns {string | undefined} Version
 */
export function gtcVersion(visitor) {
    return visitor?.gtc?.version;
}
