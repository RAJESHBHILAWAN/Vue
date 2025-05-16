import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    getCount: (state) => state.count
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 200)
    },
    decrementAsync ({ commit }) {
      setTimeout(() => {
        commit('decrement')
      }, 200)
    }
  },
  modules: {
  }
})
