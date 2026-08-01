<?php

declare(strict_types=1);

function detectAnagrams(string $word, array $anagrams): array
{
    $result = [];

    foreach ($anagrams as $anagram) {
        if (isAnagram($word, $anagram)) {
            $result[] = $anagram;
        }
    }

    return $result;
}

function isAnagram(string $word, string $anagram): bool
{
    if (
        strlen($word) !== strlen($anagram)
        || strtolower($word) === strtolower($anagram)
    ) {
        return false;
    }

    $word = strtolower($word);
    $anagram = strtolower($anagram);

    return count_chars($word, 1) === count_chars($anagram, 1);
}
