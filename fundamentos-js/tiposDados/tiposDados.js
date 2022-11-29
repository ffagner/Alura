// tipos de dados number

//tipos numéricos possiveis
let num = 3
const num2 = 3.5
const num3 = 3.1415
const num4 = 3
const num5 = .5

//operações matemáticas	
//soma
console.log(num + num2)

//subtração
console.log(num - num3)

//multiplicação
console.log(num3 * num2)

//divisão
console.log(num4 / num)

//exponenciação
console.log(num ** num2)

//módulo
console.log(num % num2)

//incremento
console.log(num++)

//decremento
console.log(num--)

//NaN - Not a Number
console.log(7 / 'oi')

// ================================================================

//tipos de dados string

//string
const nome = 'Fagner'
const sobrenome = 'Farias'
const nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)

const cifrao = "\u0024";
const aMaiusculo = "\u0041";
const tique = "\u2705";
const hiragana = "\u3041";

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// o caractere de escape \u é usado para escapar de caracteres especiais

//=================================================================

//tipos de dados boolean

//boolean
const verdadeiro = true
const falso = false
console.log(verdadeiro)
console.log(falso)
// uso de operações lógicas para retornar um valor booleano
const primeroNumber = 3
const segundoNumber = 8
console.log(primeroNumber === segundoNumber)

//funções

function nome(nome){
    return nome
}

console.log(nome('Fagner'))

//exemplo de função
// Math
//Math.round() - arredonda o número para o inteiro mais próximo
console.log(Math.round(3.8758))
//math.ceil() - arredonda o número para cima
console.log(Math.ceil(3.8758))
//math.floor() - arredonda o número para baixo
console.log(Math.floor(3.8758))
//math.trunc() - remove a parte decimal do número
console.log(Math.trunc(3.8758))
//math.pow() - eleva o número a potência desejada
console.log(Math.pow(3, 2))
//math.sqrt() - retorna a raiz quadrada do número
console.log(Math.sqrt(9))
//math.min() - retorna o menor número
console.log(Math.min(3, 5, 7, 9, 1, 2, 4, 6, 8))
//math.max() - retorna o maior número
console.log(Math.max(3, 5, 7, 9, 1, 2, 4, 6, 8))
//math.random() - retorna um número aleatório entre 0 e 1
console.log(Math.random())




