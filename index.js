const { createApp } = Vue

createApp({
  data() {
    //essas são as nossas variavais que irão guardar os numeros para 
    // que seja feita as operações
    return {
      display: '0',
      numeroAtual: null,
      numeroAnterior: null,
      operador: null
    }
  },
  methods: {
    lidarBotao(botao) {
      switch (botao) {
        case "*":
        case "-":
        case "+":
        case "/":
          this.lidarOperador(botao)
          break
        case ".":
          this.lidarDecimal()
          break
        case "=":
          this.lidarIgual()
          break
        case "AC":
          this.lidarClear()
          break
        default:
          this.lidarNumero(botao)
      }
    },
    //aqui é onde lidamos com o operador escolhido e convertemos
    lidarOperador(botao) {
      this.operador = botao
      this.numeroAnterior = parseFloat(this.display)
      this.display = '0'
    },
    lidarDecimal() {
      if (!this.display.includes('.')) {
        this.display += '.'
      }
    },
    //aqui é onde lidamos com os numeros digitados e os numeros do display
    // é onde colocamos tudo pra funcionar
    lidarIgual() {
      const numAtual = parseFloat(this.display)
      let resultado
      switch (this.operador) {
        case "+":
          resultado = this.numeroAnterior + numAtual
          break
        case "-":
          resultado = this.numeroAnterior - numAtual
          break
        case "*":
          resultado = this.numeroAnterior * numAtual
          break
        case "/":
          resultado = this.numeroAnterior / numAtual
          break
        default:
          return
      }
      this.display = resultado.toString()
      this.operador = null
      this.numeroAnterior = null
    },
    // aqui é onde limpamos o display e as variaveis 
    lidarClear() {
      this.display = "0"
      this.numeroAnterior = null
      this.numeroAtual = null
      this.operador = null
    },
    //aqui é onde sera tratado os numeros digitados
    lidarNumero(botao) {
      if (this.display === '0') {
        this.display = botao
      } else {
        this.display += botao
      }
    }
  }
}).mount("#app")
