new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Opa, o botão do mouse foi clicado!')
        },
        imprimirTeclas(event){
            this.valor = event.target.value
        }
    }
})