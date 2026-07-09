<?php

/**
 * This class provides methods to determine dough, sauce, and cheese requirements,
 * as well as calculate leftover pizza slices for a pizza party.
 */
class PizzaPi
{
    /**
     * Calculates the dough requirement for a given number of pizzas and persons.
     *
     * @param int $pizzas The number of pizzas
     * @param int $persons The number of persons each pizza will serve
     *
     * @return int The dough needed to the nearest gram
     */
    public function calculateDoughRequirement(int $pizzas, int $persons): int
    {
        return $pizzas * (($persons * 20) + 200);
    }

    /**
     * Calculates how many cans of sauce are needed for a given number of pizzas and sauce can volume.
     *
     * @param int $pizzas The number of pizzas
     * @param int $sauceCanVolume The volume of each sauce can
     *
     * @return int The number of cans of sauce needed
     */
    public function calculateSauceRequirement(int $pizzas, int $sauceCanVolume): int
    {
        return $pizzas * 125 / $sauceCanVolume;
    }

    /**
     * Calculates the number of pizza that can be made from a cheese cube.
     *
     * @param int $cheeseDimension The side-length dimension of a cheese cube
     * @param float $thickness The desired thickness of the cheese layer
     * @param int $diameter The diameter of the pizza
     *
     * @return float The number of pizzas that can be made rounded down
     */
    public function calculateCheeseCubeCoverage(int $cheeseDimension, float $thickness, int $diameter): float
    {
        return floor($cheeseDimension ** 3 / ($thickness * M_PI * $diameter));
    }

    /**
     * Calculates the number of slices that will be left over if each person takes an equal number of slices.
     *
     * @param int $pizzas The number of pizzas
     * @param int $friends The number of friends
     *
     * @return int The number of slices that will be left over
     */
    public function calculateLeftOverSlices(int $pizzas, int $friends): int
    {
        return ($pizzas * 8) % $friends;
    }
}
