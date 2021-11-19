import Vue from 'vue';
export default new Vue({
  methods: {
    selecionarUsuario(usuario){
      this.$emit('usuarioSelecionado', usuario)
    },
    quandoUsuarioEhSelecionado(callback){
      this.$on('usuarioSelecionado', callback)
    }
  }
})