new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        somar5() {
            this.valor += 5
        },
        somar1() {
            this.valor++
        }
    },
    computed: {
        resultado() {
            return this.valor !== 37 ? 'Valor diferente' : 'Valor igual'
        }
    },    
    watch: {
        resultado(){
            if(this.valor === 37){
                setTimeout(() => {
                    this.valor = 0
                }, 5000)
            }
        }
    }
});