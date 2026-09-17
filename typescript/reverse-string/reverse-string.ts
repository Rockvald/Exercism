/**
 * Reverses a given string.
 *
 * @param string The string to reverse.
 *
 * @returns The reversed string.
 */
export function reverse(string: string): string {
    return string.split('').reverse().join('');
}
