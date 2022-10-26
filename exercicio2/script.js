// Exercício 2

/* a) Uma função que receba 2 números como parâmetros, e,
dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado. */

const letraA = (numero1, numero2) => {

    const soma = numero1 + numero2

    return `Seu resultado é: ${soma}`
}

console.log(letraA(20, 6))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const letraB = (numero1, numero2) => {

    const comparar = numero1 >= numero2

    return `O numero ${numero1} é maior ou igual a ${numero2}? ${comparar}`
}

console.log(letraB(20, 6))

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const letraC = (numero1) => {

    const compararPar = numero1 % 2 === 0

    return `O numero ${numero1} é par? ${compararPar}`
}

console.log(letraC(26))

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

const letraD = (salarioBruto) => {

    const salarioLiquido = salarioBruto - (salarioBruto * 0.10)

    return `O seu salário liquido é de: ${salarioLiquido}`
}

console.log(letraD(1784))