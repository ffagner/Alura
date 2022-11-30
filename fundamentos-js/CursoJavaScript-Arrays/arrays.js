// Estudos sobre Arrays em JavaScript
// Desafio de calcular a média de alunos
// calcular a média de alunos das seguintes notas: 10, 6.5, 8, 7.5 

//exeplo usando variáveis
let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

let media1 = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media1)

//exemplo usando array
let notas = [10, 6.5, 8, 7.5]
let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / 4
console.log(media2)

//exemplo usando array e laço de repetição
let notas1 = [10, 6.5, 8, 7.5]
let soma = 0
for (let i = 0; i < notas1.length; i++) {
    soma = soma + notas1[i]
}
let media3 = soma / notas1.length
console.log(media3)

//principais métodos de array em JavaScript (métodos de iteração) 
//push - adiciona um elemento no final do array

//pop - remove o último elemento do array

//shift - remove o primeiro elemento do array

//unshift - adiciona um elemento no início do array

//splice - remove um elemento do array

//slice - copia um array

//indexOf - retorna o índice do elemento

//join - junta os elementos do array em uma string

//split - separa uma string em um array

//reverse - inverte a ordem dos elementos do array

//sort - ordena os elementos do array

//concat - concatena dois arrays

//includes - verifica se um elemento existe no array

//forEach - executa uma função para cada elemento do array

//map - executa uma função para cada elemento do array e retorna um novo array

//filter - executa uma função para cada elemento do array e retorna um novo array com os elementos que passaram no teste

//reduce - executa uma função para cada elemento do array e retorna um único valor

