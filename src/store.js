import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import app from '@/store/app.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    app
  },
  plugins: [createPersistedState({
    key: 'pwaApp',
    storage: localStorage,
    paths: ['user', 'blog', 'app'],
    reducer: state => {
      const obj = {
        app: state.app
      }
      return obj
    }
  })]
})
