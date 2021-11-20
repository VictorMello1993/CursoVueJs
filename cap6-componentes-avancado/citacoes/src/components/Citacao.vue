<template>
    <div class="citacao">
        <!-- {{texto}} -->

        <!-- Um slot representa o conteúdo passado do componente pai (no caso, Citacoes.vue) -->
        <!-- <slot></slot> -->

        <!-- Utilizando slots nomeados. No componente pai, é preciso inserir o nome na propriedade "slot" -->
        <slot name="fonte"></slot>    
            

        <!-- Slot padrão, aquele que não é nomeado -->
        <slot></slot>         

        <slot name="autor"></slot>        
    </div>
</template>

<script>
export default {
    // props: {
    //     texto: String
    // }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    /* CUIDADO COM O CONFLITO DE ESTILO! Os estilos são aplicados tanto no componente pai quanto no compontente filho
    que possui slot que implicitamente possui o elemento que foi estilizado*/
    /* h1{
        color:red!important;
    } */
</style>
