import { MutationTree } from 'vuex'

export const state = () => ({
  score: 0,
  playerOneShape: null as Number|null,
  playerTwoShape: null as Number|null
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setScore: (state, score: number) => {
    state.score = score

    // Store the score
    if (process.browser) {
      localStorage.setItem('rpssl.score', score.toString())
    }
  },

  setPlayerOneShape: (state, playerOneShape) => {
    state.playerOneShape = playerOneShape
  },

  setPlayerTwoShape: (state, playerTwoShape) => {
    state.playerTwoShape = playerTwoShape
  },

  reset: (state) => {
    state.playerOneShape = null
    state.playerTwoShape = null
  }
}
