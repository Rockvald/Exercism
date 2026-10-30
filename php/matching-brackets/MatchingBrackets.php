<?php

declare(strict_types=1);

/**
 * Checks that brackets, braces, and parentheses are balanced.
 *
 * @param string $input The string to check.
 *
 * @return bool True if the brackets, braces, and parentheses are balanced, false otherwise.
 */
function brackets_match(string $input): bool
{
    $brackets = ['[]', '{}', '()'];
    $pattern = preg_quote(implode('', $brackets), '\\');
    $input = preg_replace("/[^{$pattern}]+/", '', $input);

    do {
        $input = (string) str_replace($brackets, '', $input, $count);
    } while ($count);

    return empty($input);
}
