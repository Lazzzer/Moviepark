export const state = () => ({
  userSearch: false,
  searchQuery: {
    activeSearch: false,
    type: 'discover',
    movieName: '',
    sortBy: 'popularity.desc',
    genre: [],
    releaseDates: ['', ''],
    votesAverage: '',
    person: ''
  },
  movieList: {}
})

export const mutations = {
  SET_USER_SEARCH(state, query) {
    state.searchQuery = query
  },
  SET_DEFAULT_MOVIE_LIST(state, payload) {
    state.movieList = payload
  }
}

export const actions = {
  setSearchQuery({ commit }, query) {
    commit('SET_USER_SEARCH', query)
  },
  async setDefaultMovieList({ commit }) {
    await this.$axios.get(`${process.env.BASE_URL}/tmdb/search/defaultMovieListDummy`)
      .then((res) => {
        commit('SET_DEFAULT_MOVIE_LIST', res.data)
        console.log('CALLING SET_DEFAULT_MOVIE_LIST')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export const getters = {

}

export const strict = false
