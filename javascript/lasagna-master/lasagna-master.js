/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determines whether the lasagna is done.
 *
 * @param {number} remainingTime The remaining time of the timer in minutes.
 *
 * @returns {string} The cooking status of the lasagna.
 */
export function cookingStatus(remainingTime) {
    if (remainingTime === undefined) {
        return 'You forgot to set the timer.';
    }

    if (remainingTime === 0) {
        return 'Lasagna is done.';
    }

    return 'Not done, please wait.';
}

/**
 * Estimates how long it will take to prepare the lasagna.
 *
 * @param {string[]} layers The layers the lasagna will have.
 * @param {number} timePerLayer The average preparation time per layer in minutes.
 *
 * @returns {number} An estimation of the total preparation time in minutes.
 */
export function preparationTime(layers, timePerLayer = 2) {
    return layers.length * timePerLayer;
}

/**
 * Determines the quantity of noodles and sauce needed to make your meal.
 *
 * @param {string[]} layers The layers the lasagna will have.
 *
 * @returns {Quantities} The quantity of noodles and sauce needed.
 */
export function quantities(layers) {
    return {
        noodles: layers.filter(layer => layer === 'noodles').length * 50,
        sauce: layers.filter(layer => layer === 'sauce').length * 0.2,
    };
}

/**
 * Adds the secret ingredient of your friend's recipe to your own recipe.
 *
 * @param {string[]} friendsList The ingredient list sent by your friend.
 * @param {string[]} myList The ingredient list of your own recipe.
 *
 * @returns {void}
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scales a recipe for the desired number of portions.
 *
 * @param {Record<string, number>} recipeForTwoPortions A recipe object that holds the amounts needed for 2 portions.
 * @param {number} portionsToCook The number of portions to cook.
 *
 * @returns {Record<string, number>} A recipe object with the amounts needed for the desired number of portions.
 */
export function scaleRecipe(recipeForTwoPortions, portionsToCook) {
    const scaledRecipe = { ...recipeForTwoPortions };

    for (const ingredient in scaledRecipe) {
        scaledRecipe[ingredient] *= portionsToCook / 2;
    }

    return scaledRecipe;
}
