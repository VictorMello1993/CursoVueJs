<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- Opção 1) Interpolar diretamente no componente Citacoes.vue -->
        <!-- {{ numero }} {{ indice }} -->
        <!-- {{citacoes[indice].texto}} -->

        <!-- Opção 2) Passando o valor da propriedade para componente Citacao.vue via props -->
        <!-- <citacao :texto="citacoes[indice].texto"/> -->

        <!-- Opção 3) Passando o valor da propriedade no corpo do componente Citacao.vue com slots -->
        <citacao>
            <h1 slot="autor">{{citacoes[indice].autor}}</h1>
            <p> {{citacoes[indice].texto}}</p>            
            <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
        </citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'
export default {
    components: {Citacao},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* CUIDADO COM O CONFLITO DE ESTILO! Os estilos são aplicados tanto no componente pai quanto no compontente filho
    que possui slot que implicitamente possui o elemento que foi estilizado*/
    /* h1{
        color: green!important;
    } */
</style>
