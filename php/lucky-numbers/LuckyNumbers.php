<?php

/**
 * A class that provides utility methods for working with lucky number game.
 */
class LuckyNumbers
{
    /**
     * Sums up two numbers represented as arrays of digits.
     *
     * @param array $digitsOfNumber1 An array of digits representing the first number
     * @param array $digitsOfNumber2 An array of digits representing the second number
     *
     * @return int The sum of the two numbers
     */
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return (int) implode('', $digitsOfNumber1) + (int) implode('', $digitsOfNumber2);
    }

    /**
     * Checks if a number is a palindrome.
     *
     * @param int $number The number to check
     *
     * @return bool True if the number is a palindrome, false otherwise
     */
    public function isPalindrome(int $number): bool
    {
        return strrev((string) $number) === (string) $number;
    }

    /**
     * Validates an input field that accepts a number.
     * Used to display an error message if the input is empty or is not a positive non-zero whole number.
     *
     * @param string $input The user input to validate
     *
     * @return string An error message if the input is invalid, or an empty string if it is valid
     */
    public function validate(string $input): string
    {
        return $input === ''
            ? 'Required field'
            : ((int) $input <= 0
                ? 'Must be a whole number larger than 0'
                : '');
    }
}
