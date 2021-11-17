<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar nome</button>

    <!--Comunicação indireta utilizando callbacks. Foi criada a propriedade reiniciarFn que representa uma
        função de callback para notificar o componente pai que o valor da propriedade 'nome' foi alterado nele.  -->
    <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button> 
    <p>
      Idade do usuário: <strong>{{idade}}</strong>
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
      //O valor default também pode ser retornado através de funções 
      // default(){
      //   return Array(10).fill(5).join(',')
      // }
    },
    idade: Number,
    reiniciarFn: Function 
  },

  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome(){
      const antigo = this.nome //Valor antigo
      this.nome = "Victor" //Novo valor

      /*Disparando evento para que o componente pai o escute para monitorar mudanças que ocorrem nas propriedades 
      do componente filho - Essa é uma das formas de comunição indireta (Relação filho com o pai) - Usando $emit()*/

      /* O segundo parâmetro do $emit pode ser um valor que foi alterado, assim como pode ser um objeto contendo
      mais informações sobre o evento gerado*/
      this.$emit('nomeMudou', {novo: this.nome, antigo})
    }
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
