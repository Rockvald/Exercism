/**
 * Generates a two-fer style message.
 *
 * @param name The name of the recipient. Defaults to 'you'.
 *
 * @returns A string in the format "One for {name}, one for me."
 */
export function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
}
