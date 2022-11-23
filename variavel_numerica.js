// Tipo de variável numérica

/*
    Existem 2 tipos de variáveis javascript
    - tipo primitivo: numero, texto ('string') e booleans (true ou false)
    - objeto: criados a partir de classes ou objetos javascript
*/

// Importante:
// Nunca usar espaços, nem caracteres especiais, nem iniciar os nomes das variáveis com números
// Exemplos incorretos:
// Minha var
// 123a
// a$5

// correto!
const primeiroNumero = 1;
const segundoNumero = 2;

const somaNumeros = primeiroNumero + segundoNumero;
console.log('Soma: ' + somaNumeros); //+ serve para concatenar
console.log(typeof primeiroNumero); // retorna number

// ponto flutuante = variavel decimal = usa .
const pontoFlutuante = 3.14;
const pontoFlutuantesemZero = .9;
const divisao = pontoFlutuante / pontoFlutuantesemZero;
console.log('Divisão: ' + divisao);
console.log(typeof divisao)

// NaN => Not a Number = não é um número
const texto = 'um texto';
console.log(texto * 3);

// infinity 
console.log(10/0);

// infinity 
console.log(-10/0);

resultado = ((10 / 0) + (-10 / 0)) // +infinity + -  infinty
console.log(resultado)
console.log(typeof resultado)

// arredondamento de valores
const valorHora = 999999.455;
console.log('Para cima ' + valorHora.toFixed(2))
console.log('Para o inteiro mais próximo:', Math.round(valorHora));
console.log('O menor inteiro ' + Math.floor(valorHora));
console.log('O maior inteiro' + Math.ceil(valorHora));

// formatando em R$
const formatado = valorHora.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
console.log('Formatado: ' + formatado)

