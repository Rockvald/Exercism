<?php

declare(strict_types=1);

/**
 * Determine the winner of a Hex / Polygon game.
 *
 * @param array $lines The board lines.
 *
 * @return null|string The winner, or null if there is no winner.
 */
function winner(array $lines): ?string
{
    $board = array_map(
        fn(string $line): array => str_split(str_replace(' ', '', $line)),
        $lines
    );

    if (hasPath($board, 'O')) {
        return 'white';
    }

    if (hasPath(transpose($board), 'X')) {
        return 'black';
    }

    return null;
}

/**
 * Check if there is a path for the given player on the board.
 *
 * @param array $board The game board.
 * @param string $player The player to check for a path.
 *
 * @return bool True if there is a path, false otherwise.
 */
function hasPath(array $board, string $player): bool
{
    $rows = count($board);
    $cols = count($board[0]);

    $queue = [];

    foreach ($board[0] as $col => $cell) {
        if ($cell === $player) {
            $queue[] = [0, $col];
        }
    }

    $visited = [];
    $queueIndex = 0;

    while ($queueIndex < count($queue)) {
        [$row, $col] = $queue[$queueIndex++];

        $key = "$row,$col";

        if (isset($visited[$key])) {
            continue;
        }

        $visited[$key] = true;

        if ($row === $rows - 1) {
            return true;
        }

        $neighbours = neighbours($row, $col, $rows, $cols);
        foreach ($neighbours as [$newRow, $newCol]) {
            if ($board[$newRow][$newCol] === $player) {
                $queue[] = [$newRow, $newCol];
            }
        }
    }

    return false;
}

/**
 * Get the neighbours of a cell on the board.
 *
 * @param int $row The row of the cell.
 * @param int $column The column of the cell.
 * @param int $rowCount The number of rows on the board.
 * @param int $columnCount The number of columns on the board.
 *
 * @return array The neighbours of the cell.
 */
function neighbours(
    int $row,
    int $column,
    int $rowCount,
    int $columnCount
): array {
    $positions = [
        [$row - 1, $column],
        [$row - 1, $column + 1],
        [$row, $column - 1],
        [$row, $column + 1],
        [$row + 1, $column - 1],
        [$row + 1, $column],
    ];

    return array_values(array_filter(
        $positions,
        fn(array $position): bool =>
        $position[0] >= 0
            && $position[0] < $rowCount
            && $position[1] >= 0
            && $position[1] < $columnCount
    ));
}

/**
 * Transpose the board to get it from the other player perspective.
 *
 * @param array $board The game board.
 *
 * @return array The transposed board.
 */
function transpose(array $board): array
{
    $transposed = [];

    for ($column = 0, $count = count($board[0]); $column < $count; $column++) {
        $transposed[] = array_column($board, $column);
    }

    return $transposed;
}
