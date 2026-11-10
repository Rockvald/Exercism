/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * @type {Record<Pizza, number>}
 */
const PIZZAS_PRICES = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
};

/**
 * @type {Record<Extra, number>}
 */
const EXTRAS_PRICES = {
    ExtraSauce: 1,
    ExtraToppings: 2,
};

/**
 * Determine the price of the pizza given the pizza and optional extras.
 *
 * @param {Pizza} pizza The name of the pizza to be made
 * @param {Extra[]} extras The list of extras
 *
 * @returns {number} The price of the pizza
 */
export function pizzaPrice(pizza, ...[extra, ...otherExtras]) {
    if (extra === undefined) {
        return PIZZAS_PRICES[pizza];
    }

    return EXTRAS_PRICES[extra] + pizzaPrice(pizza, ...otherExtras);
}

/**
 * Calculate the price of the total order, given individual orders.
 *
 * @param {PizzaOrder[]} pizzaOrders A list of pizza orders
 *
 * @returns {number} The price of the total order
 */
export function orderPrice(pizzaOrders) {
    return pizzaOrders.reduce((total, order) => total + pizzaPrice(order.pizza, ...order.extras), 0);
}
