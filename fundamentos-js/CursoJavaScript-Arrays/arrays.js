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
//exemplo: crie uma lista de chamada e remova com os seguintes alunos: 
// joão, maria, josé, pedro, ana, carlos, marcos
let listaChamada = ['joão', 'maria', 'josé', 'pedro', 'ana', 'carlos', 'marcos']
//removendo o aluno maria e josé e adicionando o aluno joana
listaChamada.splice(1, 0, 'joana')
console.log(listaChamada)
//slice - faz o fatiamento do array (corta o array), o array original não é modificado.
// exemplo: lista de alunos.
animaisDoAquario = ["🐋", "🐙", "🐬", "🦈"];

animaisDoAquario.splice(1, 0, "🐠");
//animaisDoAquario.splice(3, 2, "🐟");

console.log(animaisDoAquario);

const arrAlunos = [
    'João', 
    'Maria', 
    'José', 
    'Ana', 
    'Pedro', 
    'Paulo', 
    'Marcos', 
    'Júlia', 
    'Juliana', 
    'Joaquim'
]
//exemplo de fatiamento do array
let arrAlunos1 = arrAlunos.slice(0, 5)
let arrAlunos2 = arrAlunos.slice(5, 10)
console.log(arrAlunos1)
console.log(arrAlunos2)

//indexOf - retorna o índice do elemento
//Desafio: crie uma função que receba como argumento o nome de um aluno;
//verifique se o aluno etá presente na lista e retorne a media final que se encontra no mesmo indice
//caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
//solução:
const alunos = ['joão', 'maria', 'josé', 'pedro', 'ana', 'carlos', 'marcos']
const mediasFinais = [10, 6.5, 8, 7.5, 9, 8.5, 7]

function verificaAluno(nomeAluno) {
    let alunoEncontrado = alunos.indexOf(nomeAluno)
    if (alunoEncontrado == -1) {
        return 'Aluno não encontrado'
    } else {
        return mediasFinais[alunoEncontrado]
    }
}
console.log(verificaAluno('fagner'))
//join - junta os elementos do array em uma string

//split - separa uma string em um array

//reverse - inverte a ordem dos elementos do array

//sort - ordena os elementos do array

//concat - concatena dois arrays em um só
//exemplo: concatenação de arrays
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2)
console.log(arr3)

//includes - verifica se um elemento existe no array
//exemplo:
const listaAlunos = ['joão', 'maria', 'josé', 'pedro', 'ana', 'carlos', 'marcos']

function procurarAluno(nomeAluno){
    let alunoEncontrado = listaAlunos.includes(nomeAluno)
    return alunoEncontrado
}
console.log(procurarAluno('Fagner'))

//forEach - executa uma função para cada elemento do array

//map - executa uma função para cada elemento do array e retorna um novo array

//filter - executa uma função para cada elemento do array e retorna um novo array com os elementos que passaram no teste

//reduce - executa uma função para cada elemento do array e retorna um único valor

// array vazio
let arrayVazio = []
console.log(arrayVazio)
console.log(arrayVazio.length)


//Laços de repetição em JavaScript
//Laço For
const arrNumeros = [1,2,3,4,5,6,7]
for (let i = 0; i < arrNumeros.length; i++) {
    console.log(arrNumeros[i])
}

//exemplo de laço for
//calcular a media de notas
const arrNotas = [10, 6.5, 8, 7.5]
let somaNotas = 0
for (let i = 0; i < arrNotas.length; i++) {
    somaNotas = somaNotas + arrNotas[i]
}
let mediaNotas = somaNotas / arrNotas.length
console.log(mediaNotas)