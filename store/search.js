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
  movieList: {},
  movieListType: ''
})

export const mutations = {
  SET_SEARCH_QUERY(state, query) {
    state.searchQuery = query
  },
  SET_USER_SEARCH_VARIABLE(state, payload) {
    state.userSearch = payload
  },
  SET_DEFAULT_SEARCHED_MOVIE_LIST(state, payload) {
    state.movieList = payload
  },
  SET_SEARCHED_MOVIE_LIST(state, payload) {
    state.movieList = payload
  },
  SET_MOVIE_LIST_TYPE(state, payload) {
    state.movieListType = payload
  }
}

export const actions = {
  setSearchQuery({ commit, dispatch }, query) {
    commit('SET_SEARCH_QUERY', query)
    dispatch('setMovieList')
  },
  setUserSearch({ commit }, value) {
    commit('SET_USER_SEARCH_VARIABLE', value)
  },
  async setDefaultMovieList({ commit }) {
    await this.$axios.get(`${process.env.BASE_URL}/tmdb/search/defaultMovieListDummy`)
      .then((res) => {
        commit('SET_DEFAULT_SEARCHED_MOVIE_LIST', res.data)
        console.log('CALLING SET_DEFAULT_SEARCHED_MOVIE_LIST')

        commit('SET_MOVIE_LIST_TYPE', 'Popular Movies')
        console.log('CALLING SET_MOVIE_LIST_TYPE')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async setMovieList({ commit, state }) {
    if (state.searchQuery.type === 'name') {
      return await this.$axios.get(`${process.env.BASE_URL}/tmdb/search/byNameDummy/${state.searchQuery.movieName}`)
        .then((res) => {
          commit('SET_SEARCHED_MOVIE_LIST', res.data)
          console.log('CALLING SET_SEARCHED_MOVIE_LIST')

          commit('SET_MOVIE_LIST_TYPE', "Results for '" + state.searchQuery.movieName + "'")
          console.log('CALLING SET_MOVIE_LIST_TYPE')
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (state.searchQuery.type === 'filters') {
      let preparedQuery = ''

      if (state.searchQuery.sortBy !== 'popularity.desc') {
        preparedQuery += '&sort_by='
        preparedQuery += state.searchQuery.sortBy
      } else {
        preparedQuery += '&sort_by=popularity.desc'
      }
      if (state.searchQuery.person !== '') {
        preparedQuery += '&with_people='
        preparedQuery += state.searchQuery.person
      }

      if (state.searchQuery.genre !== []) {
        preparedQuery += '&with_genres='
        preparedQuery += state.searchQuery.genre.join()
      }
      preparedQuery += '&include_adult=false&vote_count.gte=10'

      return await this.$axios.get(`${process.env.BASE_URL}/tmdb/search/withFilters/${preparedQuery}`)
        .then((res) => {
          commit('SET_SEARCHED_MOVIE_LIST', res.data)
          console.log('CALLING SET_SEARCHED_MOVIE_LIST')

          commit('SET_MOVIE_LIST_TYPE', 'Results')
          console.log('CALLING SET_MOVIE_LIST_TYPE')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
export const getters = {

}

export const strict = false
