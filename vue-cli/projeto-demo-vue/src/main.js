/* Arquivo que será responsável pelo início da aplicação do Vue, quando instanciar o Vue, seja com atributo
  el, ou através da função $mount()*/

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,

  //el: #app; 
  //Ou utilizando $mount() como está na linha abaixo

  render: h => h(App)
}).$mount('#app')
