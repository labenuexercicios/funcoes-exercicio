//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function operacaoSoma(item1, item2) {
    return item1 + item2
}

function operacaoSubtracao(item1, item2) {
    return item1 - item2
}

function operacaoMultiplicacao(item1, item2) {
    return item1 * item2
}

function operacaoDivisao(item1, item2) {
    return item1 / item2
}

const pergunta1 = Number(prompt("Digite um número"))
const pergunta2 = Number(prompt("Digite outro número"))

console.log(operacaoSoma(pergunta1, pergunta2))
console.log(operacaoSubtracao(pergunta1, pergunta2))
console.log(operacaoMultiplicacao(pergunta1, pergunta2))
console.log(operacaoDivisao(pergunta1, pergunta2))