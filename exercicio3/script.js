// Exercício 3

/* a) Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas
(soma, subtração, multiplicação e divisão). */

// Soma

const letraASoma = (numero1, numero2) => {

    const soma = numero1 + numero2

    return `O resultado de ${numero1} + ${numero2} é: ${soma}`
}

console.log(letraASoma(20, 6))

// Subtração

const letraASub = (numero1, numero2) => {

    const subtracao = numero1 - numero2

    return `O resultado de ${numero1} - ${numero2} é: ${subtracao}`
}

console.log(letraASub(20, 6))

// Multiplicação

const letraAMult = (numero1, numero2) => {

    const multiplicacao = numero1 * numero2

    return `O resultado de ${numero1} x ${numero2} é: ${multiplicacao}`
}

console.log(letraAMult(20, 6))

// Divisão

const letraADiv = (numero1, numero2) => {

    const divisao = numero1 / numero2

    return `O resultado de ${numero1} / ${numero2} é: ${divisao}` 
}

console.log(letraADiv(20, 6))

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

let numeroAleatorio = Number(prompt("Insira um número aleatório"))
let numeroAleatorio2 = Number(prompt("Insira outro número aleatório"))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

console.log(letraASoma(numeroAleatorio, numeroAleatorio2))
console.log(letraASub(numeroAleatorio, numeroAleatorio2))
console.log(letraAMult(numeroAleatorio, numeroAleatorio2))
console.log(letraADiv(numeroAleatorio, numeroAleatorio2)) 

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const resultadoSoma = letraASoma(numeroAleatorio, numeroAleatorio2)
const resultadoSub = letraASub(numeroAleatorio, numeroAleatorio2)
const resultadoMult = letraAMult(numeroAleatorio, numeroAleatorio2)
const resultadoDiv = letraADiv(numeroAleatorio, numeroAleatorio2)

console.log(resultadoSoma)
console.log(resultadoSub)
console.log(resultadoMult)
console.log(resultadoDiv)