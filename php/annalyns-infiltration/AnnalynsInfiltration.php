<?php

/**
 * Provides methods to determine which actions Annalyn's can perform in her infiltration.
 */
class AnnalynsInfiltration
{
    /**
     * Determines if Annalyn can perform a fast attack.
     *
     * She can make a fast attack if the knight is sleeping,
     * as it takes time for him to get his armor on, so he will be vulnerable.
     *
     * @param bool $is_knight_awake Whether the knight is awake
     *
     * @return bool Whether Annalyn can perform a fast attack
     */
    public function canFastAttack(bool $is_knight_awake): bool
    {
        return !$is_knight_awake;
    }

    /**
     * Determines if Annalyn can spy the group.
     *
     * At least one of the group members must be awake, otherwise, spying is a waste of time.
     *
     * @param bool $is_knight_awake Whether the knight is awake
     * @param bool $is_archer_awake Whether the archer is awake
     * @param bool $is_prisoner_awake Whether the prisoner is awake
     *
     * @return bool Whether Annalyn can spy the group
     */
    public function canSpy(
        bool $is_knight_awake,
        bool $is_archer_awake,
        bool $is_prisoner_awake
    ): bool {
        return $is_knight_awake || $is_archer_awake || $is_prisoner_awake;
    }

    /**
     * Determines if Annalyn can signal the prisoner.
     *
     * She will use a bird sounds to signal the prisoner.
     * The archer must be asleep, as archers are trained in bird signaling and could intercept the message.
     *
     * @param bool $is_archer_awake Whether the archer is awake
     * @param bool $is_prisoner_awake Whether the prisoner is awake
     *
     * @return bool Whether Annalyn can signal the prisoner
     */
    public function canSignal(
        bool $is_archer_awake,
        bool $is_prisoner_awake
    ): bool {
        return $is_prisoner_awake && !$is_archer_awake;
    }

    /**
     * Determines if Annalyn can liberate the prisoner.
     *
     * She will try sneaking into the camp to free the prisoner.
     * This risky thing can only succeed in one of two ways:
     * - If Annalyn has her dog and the archer is asleep, the knight fears the dog,
     * so they can escape before the archer reacts.
     * - If Annalyn does not have her dog but the prisoner is awake and the knight and archer are both sleeping.
     *
     * @param bool $is_knight_awake Whether the knight is awake
     * @param bool $is_archer_awake Whether the archer is awake
     * @param bool $is_prisoner_awake Whether the prisoner is awake
     * @param bool $is_dog_present Whether the dog is present
     *
     * @return bool Whether Annalyn can liberate the prisoner
     */
    public function canLiberate(
        bool $is_knight_awake,
        bool $is_archer_awake,
        bool $is_prisoner_awake,
        bool $is_dog_present
    ): bool {
        return ($is_dog_present && !$is_archer_awake) || ($is_prisoner_awake && !$is_knight_awake && !$is_archer_awake);
    }
}
