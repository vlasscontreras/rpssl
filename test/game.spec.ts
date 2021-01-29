import { winner } from '@/lib/game'

describe('Game', () => {
  /**
   * 0 Rock
   * 1 Paper
   * 2 Scissors
   * 3 Spock
   * 4 Lizard
   */
  test('equal shapes are tie', () => {
    expect(winner(0, 0)).toBe(0)
    expect(winner(1, 1)).toBe(0)
    expect(winner(2, 2)).toBe(0)
    expect(winner(3, 3)).toBe(0)
    expect(winner(4, 4)).toBe(0)
  })

  test('rock beats scissors', () => {
    expect(winner(0, 2)).toBe(1)
    expect(winner(2, 0)).toBe(2)
  })

  test('rock beats lizard', () => {
    expect(winner(0, 4)).toBe(1)
    expect(winner(4, 0)).toBe(2)
  })

  test('paper beats rock', () => {
    expect(winner(1, 0)).toBe(1)
    expect(winner(0, 1)).toBe(2)
  })

  test('paper beats spock', () => {
    expect(winner(1, 3)).toBe(1)
    expect(winner(3, 1)).toBe(2)
  })

  test('scissors beats paper', () => {
    expect(winner(2, 1)).toBe(1)
    expect(winner(1, 2)).toBe(2)
  })

  test('scissors beats lizard', () => {
    expect(winner(2, 4)).toBe(1)
    expect(winner(4, 2)).toBe(2)
  })

  test('spock beats scissors', () => {
    expect(winner(3, 2)).toBe(1)
    expect(winner(2, 3)).toBe(2)
  })

  test('spock beats rock', () => {
    expect(winner(3, 0)).toBe(1)
    expect(winner(0, 3)).toBe(2)
  })

  test('lizard beats spock', () => {
    expect(winner(4, 3)).toBe(1)
    expect(winner(3, 4)).toBe(2)
  })

  test('lizard beats paper', () => {
    expect(winner(4, 1)).toBe(1)
    expect(winner(1, 4)).toBe(2)
  })
})
