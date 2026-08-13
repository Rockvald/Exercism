<?php

declare(strict_types=1);

/**
 * Finds the fewest number of coins needed to make change for a given amount.
 *
 * @param array $coins An array of coin denominations.
 * @param int $amount The amount of change to make.
 *
 * @return array The fewest number of coins needed to make change.
 *
 * @throws InvalidArgumentException If the amount is negative or no coins are small enough to make change.
 * @throws InvalidArgumentException If no combination can add up to the target amount.
 */
function findFewestCoins(array $coins, int $amount): array
{
    if ($amount === 0) {
        return [];
    }

    if ($amount < 0) {
        throw new \InvalidArgumentException('Cannot make change for negative value');
    }

    if (min($coins) > $amount) {
        throw new \InvalidArgumentException('No coins small enough to make change');
    }

    rsort($coins);

    $minCoins = getFewestCoins($coins, $amount);

    if ($minCoins === null) {
        throw new \InvalidArgumentException('No combination can add up to target');
    }

    return $minCoins;
}

/**
 * Gets the fewest number of coins needed to make change for a given amount.
 *
 * @param array $coins An array of coin denominations.
 * @param int $amount The amount of change to make.
 * @param array &$memo A memoization array to avoid recomputing results.
 *
 * @return null|array The fewest number of coins needed to make change,
 * or null if no combination can add up to the target.
 */
function getFewestCoins(array $coins, int $amount, array &$memo = []): ?array
{
    if ($amount === 0) {
        return [];
    }

    if (isset($memo[$amount])) {
        return $memo[$amount];
    }

    $best = null;

    foreach ($coins as $coin) {
        if ($coin <= $amount) {
            $result = getFewestCoins($coins, $amount - $coin, $memo);

            if ($result === null) {
                continue;
            }

            $candidate = [...$result, $coin];

            if ($best === null || count($candidate) < count($best)) {
                $best = $candidate;
            }
        }
    }

    $memo[$amount] = $best;

    return $best;
}
