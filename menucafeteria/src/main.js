import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Importar Vuefire.
import { firestorePlugin } from 'vuefire'
// Importar Bootstrap Vue.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Estos Vue.use son Vuefire y Bootstrap Vue.
// DEBEN IR ANTES de new Vue.
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
