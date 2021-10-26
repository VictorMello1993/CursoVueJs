<template>
  <div class="contadores">
    <!-- Quando se trata de componentes, é necessário o uso do atributo key no v-for, para que o Vue consiga localizar
         o elemento que foi modificado e aplicar a atualização somente nela, dando um desempenho melhor, e também
         diminuindo as chances de ocorrerem erros na renderização. Isso ocorre nas versões mais recentes do Vue. -->
    <app-contador v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
  //Registrando o componente Contador localmente, definindo tag <app-contador> registrado no componente <app-contadores>
  components: {
    'app-contador': Contador
  }
}
</script>

<style>

</style>