//exercicio 3

function soma(num1, num2) {

    return num1 + num2
}
function subtracao(num1, num2) {

    return num1 - num2
}
function divisao(num1, num2) {

    return num1 / num2
}
function multiplicacao(num1, num2) {

    return num1 * num2
}


let numero1 = Number(prompt("digite um valor"))
let numero2 = Number(prompt("digite um valor"))

console.log(`a soma é:`, soma(numero1, numero2))
console.log(`a subtração é`,subtracao(numero1, numero2))
console.log(`a divisão é`,divisao(numero1, numero2))
console.log(`a multiplicação é`, multiplicacao(numero1, numero2))

/* a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
 */