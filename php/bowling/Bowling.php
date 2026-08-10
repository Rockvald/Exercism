<?php

declare(strict_types=1);

/**
 * Represents a game of bowling.
 */
class Game
{
    /**
     * Stores the rolls for each frame.
     *
     * @var int[][]
     */
    protected array $rolls = [];

    /**
     * The current frame number.
     */
    protected int $currentFrame = 1;

    /**
     * Records a roll for the current frame.
     *
     * @param int $pins The number of pins knocked down in the roll.
     *
     * @return void
     *
     * @throws InvalidArgumentException If the number of pins is not between 0 and 10.
     * @throws RuntimeException If the game already has ten completed frames.
     * @throws RuntimeException If all bonus rolls have been rolled for the tenth frame.
     */
    public function roll(int $pins): void
    {
        if ($pins < 0 || $pins > 10) {
            throw new \InvalidArgumentException('Invalid number of pins. It must be between 0 and 10.');
        }

        if ($this->currentFrame === 10) {
            $this->validateTenthFrame($this->rolls[$this->currentFrame] ?? []);
        }

        $this->rolls[$this->currentFrame][] = $pins;

        if ($this->shouldAdvanceFrame($this->currentFrame, $this->rolls[$this->currentFrame])) {
            $this->currentFrame++;
        }
    }

    /**
     * Calculates the score of the game with strike and spare bonuses.
     *
     * @return int The total score of the game.
     *
     * @throws RuntimeException If the game is not started or completed.
     * @throws RuntimeException If two bonus rolls score more than 10 points.
     */
    public function score(): int
    {
        if (count($this->rolls) < 10) {
            throw new \RuntimeException('The game is not started or completed.');
        }

        $score = 0;

        foreach ($this->rolls as $frame => $rolls) {
            if ($frame === 10) {
                $score += $this->calculateTenthFrameScore($rolls);
                continue;
            }

            if ($this->isStrike($rolls[0])) {
                $score += 10 + $this->calculateStrikeBonus($frame);
                continue;
            } elseif ($this->isSpare($rolls[0], $rolls[1])) {
                $score += 10 + $this->calculateSpareBonus($frame);
                continue;
            } elseif (array_sum($rolls) > 10) {
                throw new \RuntimeException('A roll cannot score more than 10 pins.');
            }

            $score += array_sum($rolls);
        }

        return $score;
    }

    /**
     * Validates the tenth frame of the game.
     *
     * @param array $tenthFrame The rolls of the tenth frame.
     *
     * @return void
     *
     * @throws RuntimeException If the game already has ten completed frames.
     * @throws RuntimeException If all bonus rolls have been rolled for the tenth frame.
     */
    protected function validateTenthFrame(array $tenthFrame): void
    {
        if (count($tenthFrame) === 2 && array_sum($tenthFrame) < 10) {
            throw new \RuntimeException('The game already has ten completed frames.');
        }

        if (count($tenthFrame) === 3) {
            throw new \RuntimeException('All bonus rolls have been rolled for the tenth frame.');
        }
    }

    /**
     * Determines whether the frame should be advanced based on the rolls.
     *
     * @param int $frame The current frame number.
     * @param array $rolls The rolls of the current frame.
     *
     * @return bool True if the frame should be advanced, false otherwise.
     */
    protected function shouldAdvanceFrame(int $frame, array $rolls): bool
    {
        return $frame < 10 && ($rolls[0] === 10 || count($rolls) === 2);
    }

    /**
     * Calculates the score of the tenth frame.
     *
     * @param array $rolls The rolls of the tenth frame.
     *
     * @return int The score of the tenth frame.
     *
     * @throws RuntimeException If the game is not completed.
     * @throws RuntimeException If two bonus rolls score more than 10 points.
     */
    protected function calculateTenthFrameScore(array $rolls): int
    {
        if (
            ($this->isStrike($rolls[0]) || $this->isSpare($rolls[0], $rolls[1]))
            && count($rolls) < 3
        ) {
            throw new \RuntimeException('The game is not completed.');
        }

        if (
            $this->isStrike($rolls[0]) && !$this->isStrike($rolls[1]) && ($rolls[1] + $rolls[2]) > 10
        ) {
            throw new \RuntimeException('Two bonus rolls cannot score more than 10 points.');
        }

        return array_sum($rolls);
    }

    /**
     * Calculates the strike bonus for the given frame.
     *
     * @param int $frame The frame number.
     *
     * @return int The strike bonus.
     */
    protected function calculateStrikeBonus(int $frame): int
    {
        $nextRoll = $this->rolls[$frame + 1][0];
        $secondNextRoll = $nextRoll === 10 && $frame < 9
            ? $this->rolls[$frame + 2][0]
            : $this->rolls[$frame + 1][1];

        return $nextRoll + $secondNextRoll;
    }

    /**
     * Calculates the spare bonus for the given frame.
     *
     * @param int $frame The frame number.
     *
     * @return int The spare bonus.
     */
    protected function calculateSpareBonus(int $frame): int
    {
        return $this->rolls[$frame + 1][0];
    }

    /**
     * Determines whether the given roll is a strike.
     *
     * @param int $roll The roll to check.
     *
     * @return bool True if the roll is a strike, false otherwise.
     */
    protected function isStrike(int $roll): bool
    {
        return $roll === 10;
    }

    /**
     * Determines whether the given rolls are a spare.
     *
     * @param int $roll1 The first roll of the spare.
     * @param int $roll2 The second roll of the spare.
     *
     * @return bool True if the rolls are a spare, false otherwise.
     */
    protected function isSpare(int $roll1, int $roll2): bool
    {
        return $roll1 + $roll2 === 10;
    }
}
