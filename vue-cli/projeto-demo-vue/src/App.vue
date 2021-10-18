<template>
  <div id="app">
    {{titulo}}
    <button @click="titulo += '#'">Alterar</button>
    </div>  
</template>

<script>
//Objeto que corresponde à instância Vue 
export default {
  // watch
  // computed
  // data
  // methods
  //...

  data: function(){
    return {
      titulo: 'Teste Data usando Vue.js'
    }
  }
}
</script>

<style>
  #app{
    background-color: chocolate;
    color: #fff;
  }
</style>
