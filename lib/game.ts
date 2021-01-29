/**
 * RPSLS Algorithm
 *
 * 0: Rock
 * 1: Paper
 * 2: Scissors
 * 3: Spock
 * 4: Lizard
 *
 * @param {number} playerOne Player 1 option.
 * @param {number} playerTwo Player 2 option.
 * @return {number}          0 if tie, 1 if player one, 2 if player two.
 */
export function winner (playerOne: number, playerTwo: number): number {
  // distance = (n + a - b) % n
  const difference = (5 + playerOne - playerTwo) % 5

  if (playerOne === playerTwo) {
    return 0
  } else if (difference % 2 === 1) {
    return 1
  } else if (difference % 2 === 0) {
    return 2
  }

  return 0
}

/**
 * Get a random integer in the range
 *
 * @param {number} min Minimum value (inclusive).
 * @param {number} max Maximum value (exclusive).
 */
export function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min) + min)
}
