import { ShapeSpec } from "@/types"

/**
 * Game shapes
 */
export const shapes: Array<ShapeSpec> = [
  {
    name: 'scissors',
    id: 2
  },
  {
    name: 'spock',
    id: 3
  },
  {
    name: 'paper',
    id: 1
  },
  {
    name: 'lizard',
    id: 4
  },
  {
    name: 'rock',
    id: 0
  }
]

/**
 * RPSLS Algorithm
 *
 * 0: Rock
 * 1: Paper
 * 2: Scissors
 * 3: Spock
 * 4: Lizard
 *
 * @link http://www.samkass.com/theories/RPSSL.html
 *
 * @param {number} playerOne Player 1 option.
 * @param {number} playerTwo Player 2 option.
 * @return {number}
 */
export function winner (playerOne: number, playerTwo: number): number {
  if (playerOne === playerTwo) {
    return 0 // Tie.
  }

  // difference = (n + a - b) % n
  const n = 5
  const difference = (n + playerOne - playerTwo) % n

  if (difference % 2 === 1) {
    return 1 // Player 1.
  } else if (difference % 2 === 0) {
    return 2 // Player 2.
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
