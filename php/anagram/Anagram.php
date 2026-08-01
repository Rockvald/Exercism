<?php

declare(strict_types=1);

/**
 * Detects anagrams of a given word from a list of candidate anagrams.
 *
 * @param string $word The word to find anagrams for
 * @param array $anagrams A list of candidate anagrams
 *
 * @return array A list of anagrams found in the candidate list
 */
function detectAnagrams(string $word, array $anagrams): array
{
    return array_values(array_filter($anagrams, fn($anagram) => isAnagram($word, $anagram)));
}

/**
 * Determines if two words are anagrams of each other.
 *
 * @param string $word The first word
 * @param string $anagram The second word
 *
 * @return bool True if the words are anagrams, false otherwise
 */
function isAnagram(string $word, string $anagram): bool
{
    $word = mb_strtolower($word);
    $anagram = mb_strtolower($anagram);

    return $word !== $anagram && count_chars($word, 1) === count_chars($anagram, 1);
}
