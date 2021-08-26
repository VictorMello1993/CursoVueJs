new Vue({
  el: '#desafio',

  data: {
    nome: 'Victor',
    idade: 27,
    image: 'adesivo-resident-evil-umbrella-corp-22x8cm-letra-branca-adesivo-resident-evil.jpg'
  },

  methods: {
    gerarNumAleatorio: function(){
      return Math.random()
    }    
  }
})