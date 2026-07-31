/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} New score board
 */
export function createScoreBoard() {
    return { 'The Best Ever': 1000000 };
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard The score board to add the player to
 * @param {string} player The name of the player to add
 * @param {number} score The player's score
 *
 * @returns {Record<string, number>} Updated score board
 */
export function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;

    return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard The score board to remove the player from
 * @param {string} player The name of the player to remove
 *
 * @returns {Record<string, number>} Updated score board
 */
export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];

    return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard The score board to update
 * @param {string} player The name of the player to update
 * @param {number} points The number of points to add
 *
 * @returns {Record<string, number>} Updated score board
 */
export function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;

    return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard The score board to update
 *
 * @returns {Record<string, number>} Updated score board
 */
export function applyMondayBonus(scoreBoard) {
    for (const player in scoreBoard) {
        scoreBoard[player] += 100;
    }

    return scoreBoard;
}
