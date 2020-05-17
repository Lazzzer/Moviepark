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
    await this.$axios.get(`${process.env.API_URL}/tmdb/genresList`)
      .then((res) => {
        commit('SET_GENRES_LIST', res.data.genres)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const getters = {

}
