// Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

const meuNome = "Dhouglas"
const imprimirNome = (meuNome) => {

    return `Olá, ${meuNome}!`
}

console.log (imprimirNome(meuNome))

// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele.
// Chame esta função várias vezes com números diferentes.

const tabuada = (meuNumero) => {
    const numero1 = meuNumero * 1
    const numero2 = meuNumero * 2
    const numero3 = meuNumero * 3
    const numero4 = meuNumero * 4
    const numero5 = meuNumero * 5
    const numero6 = meuNumero * 6
    const numero7 = meuNumero * 7
    const numero8 = meuNumero * 8
    const numero9 = meuNumero * 9
    const numero10 = meuNumero * 10

    return `Seu resultado é:
    ${meuNumero} x 1  = ${numero1}
    ${meuNumero} x 2  = ${numero2}
    ${meuNumero} x 3  = ${numero3}
    ${meuNumero} x 4  = ${numero4}
    ${meuNumero} x 5  = ${numero5}
    ${meuNumero} x 6  = ${numero6}
    ${meuNumero} x 7  = ${numero7}
    ${meuNumero} x 8  = ${numero8}
    ${meuNumero} x 9  = ${numero9}
    ${meuNumero} x 10 = ${numero10}` 
}

console.log(tabuada(9))

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
/*
const modelo = (meuNumero) => {
    const numero1 = meuNumero * 5

    return `Seu resultado é:
    ${meuNumero} x 1  = ${numero1}`
}
*/
