/**
 * Determine Bob's response to a given message.
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * @param message The message to respond to
 *
 * @returns The response to the message
 */
export function hey(message: string): string {
    let answer = 'Whatever.';
    message = message.trim();

    if (message === '') {
        answer = 'Fine. Be that way!';
    } else if (isYelling(message) && isQuestion(message)) {
        answer = "Calm down, I know what I'm doing!";
    } else if (isYelling(message)) {
        answer = 'Whoa, chill out!';
    } else if (isQuestion(message)) {
        answer = 'Sure.';
    }

    return answer;
}

/**
 * Determine if the message is a question.
 *
 * @param message The message to check
 *
 * @returns `true` if the message is a question, `false` otherwise
 */
function isQuestion(message: string): boolean {
    return message.endsWith('?');
}

/**
 * Determine if the message is a yelling.
 *
 * @param message The message to check
 *
 * @returns `true` if the message is a yelling, `false` otherwise
 */
function isYelling(message: string): boolean {
    return /^(?=.*[A-Z])[^a-z]*$/.test(message);
}
