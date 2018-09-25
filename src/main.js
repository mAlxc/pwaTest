import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

import fr from './locale/fr'
import en from './locale/en'

// ##### vue-i18n
// #### internationalization
Vue.use(VueI18n)
// ### fichier locales
const messages = {
  fr: fr,
  en: en
}
// ### config de i18n
const i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})

// ##### vuetify
// #### bibliotheque de composants
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#3F51B5',
    secondary: '#757575',
    accent: '#607D8B'
  }
})

Vue.config.productionTip = false

// ##### VueJs
// #### Coeur de l'aplciation Vue
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
