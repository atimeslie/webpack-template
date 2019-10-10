import * as types from './mutation_types'

export const setTarget = function({ commit }, target) {
  commit(types.SET_TARGET, target)
}
