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
  SET_SEARCH_QUERY (state, query) {
    state.searchQuery = query
  },
  SET_USER_SEARCH_VARIABLE (state, payload) {
    state.userSearch = payload
  },
  SET_SEARCH_QUERY_TYPE (state, payload) {
    state.searchQuery.type = payload
  },
  SET_DEFAULT_SEARCHED_MOVIE_LIST (state, payload) {
    state.movieList = payload
  },
  SET_SEARCHED_MOVIE_LIST (state, payload) {
    state.movieList = payload
  },
  SET_MOVIE_LIST_PAGES (state, { page, totalPages }) {
    state.movieListPage = page
    state.movieListTotalPages = totalPages
  },

  SET_MOVIE_LIST_TYPE (state, payload) {
    state.movieListType = payload
  },
  INCREMENT_PAGE_MOVIE_LIST (state) {
    state.searchQuery.page++
  },
  ADD_TO_SEARCHED_MOVIE_LIST (state, payload) {
    state.movieList.push(...payload)
  }
}

export const actions = {
  incrementPageMovieList ({ commit }) {
    commit('INCREMENT_PAGE_MOVIE_LIST')
  },
  async setSearchQuery ({ commit, dispatch }, query) {
    dispatch('setUserSearch', true)
    commit('SET_SEARCH_QUERY', query)
    await dispatch('setMovieList')
    dispatch('setUserSearch', false)
  },
  setUserSearch ({ commit }, value) {
    commit('SET_USER_SEARCH_VARIABLE', value)
  },
  async setDefaultMovieList ({ commit }) {
    return await this.$axios.get(`${process.env.API_URL}/tmdb/search/defaultMovieList/1`)
      .then((res) => {
        commit('SET_SEARCH_QUERY_TYPE', 'discover')
        commit('SET_DEFAULT_SEARCHED_MOVIE_LIST', res.data.results)
        commit('SET_MOVIE_LIST_TYPE', 'Popular Movies')
        commit('SET_MOVIE_LIST_PAGES', { page: res.data.page, totalPages: res.data.total_pages })
      })
  },
  async setMovieList ({ commit, state }) {
    if (state.searchQuery.type === 'discover') {
      return await this.$axios.get(`${process.env.API_URL}/tmdb/search/defaultMovieList/${state.searchQuery.page}`)
        .then((res) => {
          commit('ADD_TO_SEARCHED_MOVIE_LIST', res.data.results)
          commit('SET_MOVIE_LIST_PAGES', { page: res.data.page, totalPages: res.data.total_pages })
        })
    }
    if (state.searchQuery.type === 'name') {
      return await this.$axios.get(`${process.env.API_URL}/tmdb/search/byName/${state.searchQuery.movieName}/${state.searchQuery.page}`)
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
        .catch(() => {
          commit('SET_SEARCHED_MOVIE_LIST', [])
          commit('SET_MOVIE_LIST_TYPE', '0 Result')
          commit('SET_MOVIE_LIST_PAGES', { page: 1, totalPages: 1 })
        })
    }
    if (state.searchQuery.type === 'filters') {
      let preparedQuery = ''
      let voteCount = 10

      if (state.searchQuery.sortBy !== 'popularity.desc') {
        preparedQuery += `&sort_by=${state.searchQuery.sortBy}`
        if (state.searchQuery.sortBy === 'release_date.desc' || state.searchQuery.sortBy === 'release_date.asc') {
          voteCount = 0
        }
      } else {
        preparedQuery += '&sort_by=popularity.desc'
      }
      if (state.searchQuery.releaseDates[0] !== '' && state.searchQuery.releaseDates[1] !== '') {
        voteCount = 0
        preparedQuery += `&primary_release_date.gte=${state.searchQuery.releaseDates[0]}&primary_release_date.lte=${state.searchQuery.releaseDates[1]}`
      } else if (state.searchQuery.releaseDates[0] !== '') {
        voteCount = 0
        preparedQuery += `&primary_release_date.gte=${state.searchQuery.releaseDates[0]}`
      } else if (state.searchQuery.releaseDates[1] !== '') {
        voteCount = 0
        preparedQuery += `&primary_release_date.lte=${state.searchQuery.releaseDates[1]}`
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
      preparedQuery += `&include_adult=false&vote_count.gte=${voteCount}&region=US&page=${state.searchQuery.page}`

      return await this.$axios.get(`${process.env.API_URL}/tmdb/search/withFilters/${preparedQuery}`)
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
        .catch(() => {
          commit('SET_SEARCHED_MOVIE_LIST', [])
          commit('SET_MOVIE_LIST_TYPE', '0 Result')
          commit('SET_MOVIE_LIST_PAGES', { page: 1, totalPages: 1 })
        })
    }
  }
}
export const getters = {

}

export const strict = false
