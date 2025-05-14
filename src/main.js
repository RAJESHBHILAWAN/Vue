// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import VueFrag from 'vue-frag'
import { vFocus } from './directives/directives'
const pinia = createPinia()
const app = createApp(App)
app.use(store)
app.use(pinia)
app.use(router)
app.use(VueFrag)
app.directive('focus', vFocus)
app.mount('#app')
