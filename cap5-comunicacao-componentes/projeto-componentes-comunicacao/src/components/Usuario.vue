<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{nome}}</strong></p>
        <p>Idade é <strong>{{idade}}</strong></p>
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

            <!--Aula 125 e 126 - Criando eventos personalizados (no caso, chama-se "nomeMudou") 
            para comunicação do componente filho com o componente pai (comunicação indireta) e
            uso de callbacks (no caso, foi criada a propriedade do filho chamada "reiniciarFn", que irá disparar o 
            evento para que o pai seja notificado a mudança na propriedade 'nome')-->
            <app-usuario-info :nome="nome" @nomeMudou="nome = $event.novo" :reiniciarFn="reiniciarNome" :idade="idade"/> 

            <!-- <app-usuario-editar :idade="idade" @idadeMudou="idade = $event" :reiniciarIdadeFn="reiniciarIdade"/> -->

            <!-- Esse será a tag do componente que se comunicará com o componente UsuarioInfo via event bus -->
            <app-usuario-editar :idade="idade"/> 
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
            nome: 'Victor',
            idade: 27
        }
    },

    methods: {
        alterarNome(){
            this.nome = 'Pedro'
        },

        // Função invocada pelo callback reiniciarFn registrado no componente UsuarioInfo.vue
        reiniciarNome(){
            this.nome = 'Felipe'
        },

        // Função invocada pelo callback reiniciarIdadeFn registrado no componente UsuarioEditar.vue
        reiniciarIdade(){
            this.idade = 27
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
