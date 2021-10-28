<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  //Recebendo a propriedade 'nome' que foi passada do componente pai (Usuario.vue)
  // props: ['nome'],

  //Validando propriedades
  props: {
    nome: {
      type: String,
    //   required: true,
      default: "Anônimo",
    },
  },

  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
  },

  //CONFLITO! Já existe um atributo que na verdade é uma propriedade 'nome' definido no props
  // data(){
  //     return {
  //         nome: ''
  //     }
  // }

  /*OBS: uma propriedade que é recebida pelo componente filho pode ser tratado como dado que foi
    definido no atributo data, computed, watch e até em methods*/
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
