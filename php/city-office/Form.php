<?php

/**
 * Form class for formatting and validating form data.
 */
class Form
{
    /**
     * Returns a string consisting of spaces of the specified length to fill out the form with blank values.
     *
     * @param int $length The length of the string to return
     *
     * @return string A string representation of the blank line
     */
    public function blanks(int $length): string
    {
        return str_repeat(" ", $length);
    }

    /**
     * Split a value into separate letters.
     *
     * @param string $word The word to split
     *
     * @return array An array of the letters in the specified word
     */
    public function letters(string $word): array
    {
        return mb_str_split($word);
    }

    /**
     * Check if a value will fit into the form.
     *
     * @param string $word The word to check
     * @param int $max_length The maximum length of the word
     *
     * @return bool True if the word will fit, false otherwise
     */
    public function checkLength(string $word, int $max_length): bool
    {
        $difference = mb_strlen($word) - $max_length;
        return $difference <= 0;
    }

    /**
     * Format an address in the form.
     *
     * @param Address $address The address to format
     *
     * @return string A formatted string representation of the address
     */
    public function formatAddress(Address $address): string
    {
        $formattedStreet = mb_strtoupper($address->street);
        $formattedPostalCode = mb_strtoupper($address->postal_code);
        $formattedCity = mb_strtoupper($address->city);

        return <<<FORMATTED_ADDRESS
            $formattedStreet
            $formattedPostalCode $formattedCity
            FORMATTED_ADDRESS;
    }
}
