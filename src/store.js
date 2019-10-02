import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { BASEURL } from './config/url'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brands: [],
    brand: {}
  },
  mutations: {
    SET_BRANDS(state, response) {
      state.brands = response
    },
    SET_BRAND(state, response) {
      state.brand = response
    }
  },
  actions: {
    loadBrands({ commit }) {
      axios.get(BASEURL)
      .then(response => response.data)
      .then(response => {
        commit('SET_BRANDS', response)
      })
    },
    loadBrandById({ commit }, entity_id) {
      axios.get(BASEURL + '/' + entity_id)
      .then(({data}) => commit('SET_BRAND', data))
    }
  }
})
