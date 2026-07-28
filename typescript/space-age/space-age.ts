/**
 * The earth year in seconds.
 */
const EARTH_YEAR_SECONDS = 31557600;

/**
 * The orbital period of each planet in earth years.
 */
const PLANET_ORBITAL_PERIOD = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

/**
 * Represents a planet for which the age can be calculated.
 */
type Planet = keyof typeof PLANET_ORBITAL_PERIOD;

/**
 * Calculates the age of someone for a planet in earth years.
 *
 * @param planet The planet for which to calculate the age
 * @param seconds The number of seconds since the person was born
 *
 * @returns The age of the person in earth years for the given planet
 */
export function age(planet: Planet, seconds: number): number {
    const earthYears = seconds / EARTH_YEAR_SECONDS;
    const planetYears = earthYears / PLANET_ORBITAL_PERIOD[planet];

    return Math.round((planetYears + Number.EPSILON) * 100) / 100;
}
