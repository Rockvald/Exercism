/// <reference path="./global.d.ts" />

// @ts-check

import { notify } from './notifier';
import { order } from './grocer';

/**
 * Success callback for the grocer order.
 *
 * @return void
 */
export function onSuccess() {
    notify({ message: 'SUCCESS' });
}

/**
 * Error callback for the grocer order.
 *
 * @return void
 */
export function onError() {
    notify({ message: 'ERROR' });
}

/**
 * Attempts to place an order via a call to the grocer's API.
 *
 * @param {GrocerQuery} query The query to send to the grocer's API.
 * @param {FruitPickerSuccessCallback} onSuccessCallback The callback to invoke on success.
 * @param {FruitPickerErrorCallback} onErrorCallback The callback to invoke on error.
 *
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback);
}

/**
 * Posts an order to the grocer's API.
 *
 * @param {string} variety The variety of fruit to order.
 * @param {number} quantity The quantity of fruit to order.
 * @return void
 */
export function postOrder(variety, quantity) {
    orderFromGrocer({ variety, quantity }, onSuccess, onError);
}
