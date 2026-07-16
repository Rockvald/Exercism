<?php

/**
 * Provides to help generate an ASCII heart with some initials.
 */
class HighSchoolSweetheart
{
    /**
     * Returns the first letter of the given name, cleaned of any unnecessary whitespace.
     *
     * @param string $name The name to extract the first letter from
     *
     * @return string The first letter of the name
     */
    public function firstLetter(string $name): string
    {
        return mb_substr(mb_trim($name), 0, 1);
    }

    /**
     * Format the first letter of a name as an initial.
     *
     * @param string $name The name to format
     *
     * @return string The initial of the name
     */
    public function initial(string $name): string
    {
        return sprintf('%s.', mb_strtoupper($this->firstLetter($name)));
    }

    /**
     * Split a full name into the first name and the last name initials.
     *
     * @param string $name The full name to split
     *
     * @return string The initials of the name
     */
    public function initials(string $name): string
    {
        [$firstName, $lastName] = explode(' ', $name);

        return sprintf('%s %s', $this->initial($firstName), $this->initial($lastName));
    }

    /**
     * Pair two sweethearts together and return their initials in a heart shape.
     *
     * @param string $firstSweetheart The first sweetheart's full name
     * @param string $secondSweetheart The second sweetheart's full name
     *
     * @return string The initials of the sweethearts in a heart shape
     */
    public function pair(string $firstSweetheart, string $secondSweetheart): string
    {
        return sprintf(<<<HEART
     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     %s  +  %s     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *
HEART, $this->initials($firstSweetheart), $this->initials($secondSweetheart));
    }
}
