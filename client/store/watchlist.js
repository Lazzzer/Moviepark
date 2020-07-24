export const state = () => ({
  watchList: []
})

export const mutations = {
  SET_WATCHLIST (state, list) {
    state.watchList = list
  }
}

export const actions = {
  async setWatchList ({ commit }, payload) {
    if (payload === undefined) {
      await this.$axios.get('/watchlist/get')
        .then((res) => {
          commit('SET_WATCHLIST', res.data)
        }).catch(() => {
          commit('SET_WATCHLIST', [])
        })
    } else {
      commit('SET_WATCHLIST', [])
    }
  }
}

export const getters = {
  watchedMovieList: (state) => {
    return state.watchList.filter(movie => movie.watched === true)
  },
  notWatchedMovieList: (state) => {
    return state.watchList.filter(movie => movie.watched === false)
  }
}
