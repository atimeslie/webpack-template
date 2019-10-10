import * as types from './mutation_types'

const mutations = {
  [types.SET_TARGET](state, target) {
    state.target = target
  }
}

export default mutations
