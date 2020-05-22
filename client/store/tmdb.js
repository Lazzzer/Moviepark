export const state = () => ({
  genresList: []
})

export const mutations = {
  SET_GENRES_LIST (state, list) {
    state.genresList = list
  }
}

export const actions = {
  async setGenreList ({ commit }) {
    return await this.$axios.get(`${process.env.API_URL}/tmdb/genresList`)
      .then((res) => {
        commit('SET_GENRES_LIST', res.data.genres)
      })
  }
}

export const getters = {

}
