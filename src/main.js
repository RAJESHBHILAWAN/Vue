import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import store from './store'
// import VueMask from 'v-mask'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  locale: 'en', // default language
  fallbackLocale: 'en', // fallback if no translation found
  messages: {
    en,
    fr
  }
})
/* const i18nf = createI18n({
  locale: 'fr', // default language
  fallbackLocale: 'fr', // fallback if no translation found
  messages: {
    en,
    fr
  }
}) */

const pinia = createPinia()
const app = createApp(App)
app.use(store)
app.use(pinia)
app.use(router)
app.use(i18n)
app.directive('color', {
  mounted (el, binding) {
    el.style.color = binding.value
  },
  updated (el, binding) {
    el.style.color = binding.value
  }
})
app.directive('highlight', {
  mounted (el, binding) {
    el.style.color = binding.value
  },
  bind (el, binding) {
    el.style.color = binding.value
  },
  updated (el, binding) {
    el.style.color = binding.value
  }
})
// app.use(VueMask)
app.mount('#app')
