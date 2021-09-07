new Vue({
	el: '#desafio',

	data: {
		aplicarDestaque: true,
		aplicarEncolher: false,
		classeQuadrado3: '',
		classeQuadrado4: '',
		girar: false,
		cor: '',
		estilo5: {
			width: '50px',
			height: '50px',
			float: 'right'
		},
		classe6: 'progress',
		width: '0'
	},

	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicarDestaque = !this.aplicarDestaque
				this.aplicarEncolher = !this.aplicarEncolher
			}, 1000)
		},

		aplicarRotacao(event) {
			this.girar = event.target.value === 'true'
		},

		iniciarProgresso() {

			//MINHA RESOLUÇÃO
			// 	const div = document.querySelector(`.${this.classe6}`)

			// 	div.style.height = '50'
			// 	div.style.width = '10'

			// 	let widthAux = 10
			// 	let width = div.style.width.substring(0, 2)

			// 	setInterval(() => {
			// 		width = Number(width) + widthAux
			// 		div.style.width = width.toString()
			// 	}, 1000)
			// }

			// CORREÇÃO
			let valor = 0

			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				
				if(valor === 100) clearInterval(temporizador)
			}, 500)
		}
	}
})
