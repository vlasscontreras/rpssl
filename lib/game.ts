import { ShapeSpec } from "@/types"

/**
 * Game shapes
 */
export const shapes: Array<ShapeSpec> = [
  {
    name: 'scissors',
    id: 2,
    classname: 'from-scissors-start to-scissors-end'
  },
  {
    name: 'spock',
    id: 3,
    classname: 'from-spock-start to-spock-end'
  },
  {
    name: 'paper',
    id: 1,
    classname: 'from-paper-start to-paper-end'
  },
  {
    name: 'lizard',
    id: 4,
    classname: 'from-lizard-start to-lizard-end'
  },
  {
    name: 'rock',
    id: 0,
    classname: 'from-rock-start to-rock-end'
  }
]

/**
 * Get shape spec by name
 *
 * @param {String} name Shape name
 */
export function getShapeSpecByName (name: String): ShapeSpec|null {
  const shape = shapes.filter(shape => shape.name === name)

  if (!shape) {
    return null
  }

  return shape[0]
}

/**
 * Get shape spec by ID
 *
 * @param {Number} id Shape ID
 */
export function getShapeSpecById (id: Number): ShapeSpec|null {
  const shape = shapes.filter(shape => shape.id === id)

  if (!shape) {
    return null
  }

  return shape[0]
}

/**
 * RPSSL Algorithm
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
