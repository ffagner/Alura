# Tipos de Dados
Tipos de dados são valores que podem ser armazenados em variáveis.

## variáveis
Variáveis são espaços na memória do computador que podem ser usados para armazenar valores. Para criar uma variável, você deve usar a palavra-chave `var` seguida pelo nome da variável. Por exemplo:

Os tipos de dados em javascript podem ser divididos em 2 grupos: primitivos e objetos.

Os tipos primitivos são: `string`, `number`, `boolean`, `null` e `undefined`.


## Tipo: Number
O tipo number é um tipo numérico, que pode ser inteiro ou decimal.

## Tipo: String
O tipo string é um tipo de texto, que pode ser representado por aspas simples ou duplas.

vale resaltar sobre a codificação de caracteres ou character encoding. O javascript usa o padrão UTF-16, que é um padrão de codificação de caracteres que suporta todos os caracteres do alfabeto latino, grego, cirílico, hebraico, árabe, etc. O javascript também suporta caracteres especiais como emojis.

## Tipo: Boolean
O tipo boolean é um tipo lógico, que pode ser `true` ou `false`.

## Tipos de Variáveis em Javascript
Existem 3 tipos de variáveis em javascript: `var`, `let` e `const`.
- `var` é uma variável global ou local no escopo da função.
- `let` é uma variável local no escopo do bloco, ou seja, dentro de um bloco de código, como um if ou loop.
- `const` é uma constante, que não pode ser alterada.

## truthy e falsy
Os valores `true` e `false` são valores booleanos, mas existem outros valores que podem ser considerados como `true` ou `false` quando usados em uma condição. Esses valores são chamados de truthy e falsy.
- truthy: `true`, `1`, `3.14`, `"foo"`, `[]`, `{}`, `function() {}`
- falsy: `false`, `0`, `NaN`, `""`, `null`, `undefined`
- null e undefined são valores especiais que representam a ausência de valor. null é um valor que você pode definir para uma variável. undefined é um valor que é atribuído automaticamente a variáveis que não foram definidas.

## Template Strings
Template strings são strings que permitem expressões embutidas. Você pode usar template strings para construir strings em várias linhas e usar expressões embutidas em strings. 

## Funções
Funções são blocos de código que podem ser executados quando são chamados. Para criar uma função, você deve usar a palavra-chave `function` seguida pelo nome da função. Por exemplo:

`function nome(name){`
    `return nome`
`}`
`console.log(nome('Fagner'))`

- `function` é uma palavra-chave que define uma função.
- `nome` é o nome da função.
- `name` é o parâmetro da função.
- `return` é uma palavra-chave que define o valor retornado pela função.

- Parâmetros são variáveis que são usadas para armazenar os valores que são passados para uma função quando ela é chamada.
- Argumentos são os valores reais passados para uma função.

