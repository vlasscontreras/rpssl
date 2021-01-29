import { MutationTree } from 'vuex'

const currentScore: Number = process.browser ? Number(localStorage.getItem('rpssl.score')) : 0

export const state = () => ({
  score: currentScore,
  playerShape: null as Number|null,
  cpuShape: null as Number|null
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setScore: (state, score: Number) => {
    state.score = score

    // Store the score
    if (process.browser) {
      localStorage.setItem('rpssl.core', score.toString())
    }
  },

  setPlayerShape: (state, playerShape) => {
    state.playerShape = playerShape
  },

  setCpuShape: (state, cpuShape) => {
    state.cpuShape = cpuShape
  }
}
