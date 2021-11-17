<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{nome}}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <!-- Uma das formas de comunicação entre os componentes: usando propriedades -->
            <!-- No caso, foi criada a propriedade "nome" passando o valor "Pedro" -->
            <!-- E o componente filho (no caso, app-usuario-info) precisa receber essa propriedade
                 para interpolar o valor que foi passado do componente pai (Usuario)
             -->
             <!-- Porém, esse valor é estático, não foi alterado para o valor que foi trocado a partir do atributo
                   'data' que foi passado o nome 'Victor'. Para resolver o valor de uma propriedade, basta utilizar
                   a diretiva v-bind:<propriedade> -->

            <!--OBS: definir o nome das propriedades dos componentes é case sensitive! Ou seja, embora no HTML 
                     as tags sejam case insensitive, no momento de compilar o que foi definido no componente para o 
                     código Javascript, haverá uma diferença entre letras maiúsculas e minúsculas, pois utiliza 
                     o Camel Case na definição de identificadores de variáveis e funções.  -->

            <!--Aula 125 - Criando eventos personalizados (no caso, chama-se "nomeMudou") 
            para comunicação do componente filho com o componente pai (comunicação indireta)  -->
            <app-usuario-info :nome="nome" @nomeMudou="nome = $event.novo"/> 
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Victor'
        }
    },

    methods: {
        alterarNome(){
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
