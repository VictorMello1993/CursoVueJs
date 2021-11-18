<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{novaIdade}}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
        <button @click="reiniciarIdadeFn()">Reiniciar idade (callback)</button>
    </div>
</template>

<script>
import eventBus from '@/bus.js';

export default {
 props: {
    idade: Number,
    reiniciarIdadeFn: Function
  },
  methods: {
      alterarIdade(){         
          // Resolvendo o warning emitido no console para tratar as modificações nos valores do props
          this.novaIdade = this.idade
          this.novaIdade = 33        

        //   this.$emit('idadeMudou', this.novaIdade) //Emitindo evento para comunicação com o componente pai

        //   Utilizando Event Bus para emitir eventos para seus irmãos.
        //   eventBus.$emit('idadeMudou', this.novaIdade)

        // Ou
        
          //Utilizando método do evento definido no bus.js
          eventBus.alterarIdade(this.novaIdade)
      }
  },
  data(){
      return {
          novaIdade: this.idade
      }
  }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
