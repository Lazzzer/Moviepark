export const state = () => ({
  userSearch: false,
  searchQuery: {
    activeSearch: false,
    type: 'discover',
    page: 1,
    movieName: '',
    sortBy: 'popularity.desc',
    genre: [],
    releaseDates: ['', ''],
    votesAverage: '',
    person: ''
  },
  movieList: {},
  movieListPage: '',
  movieListTotalPages: '',
  movieListType: ''
})

export const mutations = {
  SET_SEARCH_QUERY(state, query) {
    state.searchQuery = query
  },
  SET_USER_SEARCH_VARIABLE(state, payload) {
    state.userSearch = payload
  },
  SET_SEARCH_QUERY_TYPE(state, payload) {
    state.searchQuery.type = payload
  },
  SET_DEFAULT_SEARCHED_MOVIE_LIST(state, payload) {
    state.movieList = payload
  },
  SET_SEARCHED_MOVIE_LIST(state, payload) {
    state.movieList = payload
  },
  SET_MOVIE_LIST_PAGES(state, { page, totalPages }) {
    state.movieListPage = page
    state.movieListTotalPages = totalPages
  },

  SET_MOVIE_LIST_TYPE(state, payload) {
    state.movieListType = payload
  },
  INCREMENT_PAGE_MOVIE_LIST(state) {
    state.searchQuery.page++
  },
  ADD_TO_SEARCHED_MOVIE_LIST(state, payload) {
    state.movieList.push(...payload)
  }
}

export const actions = {
  incrementPageMovieList({ commit }) {
    commit('INCREMENT_PAGE_MOVIE_LIST')
  },
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
        commit('SET_SEARCH_QUERY_TYPE', 'discover')
        commit('SET_DEFAULT_SEARCHED_MOVIE_LIST', res.data.results)
        commit('SET_MOVIE_LIST_TYPE', 'Popular Movies')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async setMovieList({ commit, state }) {
    if (state.searchQuery.type === 'name') {
      return await this.$axios.get(`${process.env.BASE_URL}/tmdb/search/byName/${state.searchQuery.movieName}/${state.searchQuery.page}`)
        .then((res) => {
          if (state.searchQuery.page > 1) {
            commit('ADD_TO_SEARCHED_MOVIE_LIST', res.data.results)
            commit('SET_MOVIE_LIST_PAGES', { page: res.data.page, totalPages: res.data.total_pages })
          } else {
            commit('SET_SEARCHED_MOVIE_LIST', res.data.results)
            commit('SET_MOVIE_LIST_TYPE', res.data.total_results + " Results for '" + state.searchQuery.movieName + "'")
            commit('SET_MOVIE_LIST_PAGES', { page: res.data.page, totalPages: res.data.total_pages })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (state.searchQuery.type === 'filters') {
      let preparedQuery = ''

      if (state.searchQuery.sortBy !== 'popularity.desc') {
        preparedQuery += `&sort_by=${state.searchQuery.sortBy}`
      } else {
        preparedQuery += '&sort_by=popularity.desc'
      }
      if (state.searchQuery.releaseDates[0] !== '' && state.searchQuery.releaseDates[1] !== '') {
        preparedQuery += `&release_date.gte=${state.searchQuery.releaseDates[0]}&release_date.lte=${state.searchQuery.releaseDates[1]}`
      }
      if (state.searchQuery.person !== '') {
        preparedQuery += `&with_people=${state.searchQuery.person}`
      }

      if (state.searchQuery.genre !== []) {
        preparedQuery += `&with_genres=${state.searchQuery.genre.join()}`
      }
      if (state.searchQuery.votesAverage !== '' && (state.searchQuery.votesAverage <= 10 && state.searchQuery.votesAverage >= 0)) {
        preparedQuery += `&vote_average.gte=${state.searchQuery.votesAverage}`
      }
      preparedQuery += `&include_adult=false&vote_count.gte=10&page=${state.searchQuery.page}`

      return await this.$axios.get(`${process.env.BASE_URL}/tmdb/search/withFilters/${preparedQuery}`)
        .then((res) => {
          if (state.searchQuery.page > 1) {
            commit('ADD_TO_SEARCHED_MOVIE_LIST', res.data.results)
            commit('SET_MOVIE_LIST_PAGES', { page: res.data.page, totalPages: res.data.total_pages })
          } else {
            commit('SET_SEARCHED_MOVIE_LIST', res.data.results)
            commit('SET_MOVIE_LIST_TYPE', res.data.total_results + ' Results')
            commit('SET_MOVIE_LIST_PAGES', { page: res.data.page, totalPages: res.data.total_pages })
          }
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
