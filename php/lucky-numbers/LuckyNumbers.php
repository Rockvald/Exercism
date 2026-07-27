<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return (int) implode('', $digitsOfNumber1) + (int) implode('', $digitsOfNumber2);
    }

    public function isPalindrome(int $number): bool
    {
        return strrev((string) $number) === (string) $number;
    }

    public function validate(string $input): string
    {
        return $input === ''
            ? 'Required field'
            : ((int) $input <= 0
                ? 'Must be a whole number larger than 0'
                : '');
    }
}
