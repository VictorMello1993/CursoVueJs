import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'

Vue.config.productionTip = false

// Registrando componente Contador de forma global, criando uma tag personalizada HTML que representa o componente <app-contador>, no App.vue
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App)
}).$mount('#app')
