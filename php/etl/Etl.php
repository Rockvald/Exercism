<?php

declare(strict_types=1);

function transform(array $input): array
{
    $result = [];

    foreach ($input as $score => $letters) {
        $result += array_fill_keys($letters, $score);
    }

    return array_change_key_case($result);
}
