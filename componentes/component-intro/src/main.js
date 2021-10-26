import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

Vue.config.productionTip = false

// Registrando componente Contador de forma global, criando uma tag personalizada HTML que representa o componente <app-contadores>, no App.vue
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App)
}).$mount('#app')
