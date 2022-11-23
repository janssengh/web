const texto1 = "Testo com aspas duplas ou simples";
console.log(texto1);
console.log(typeof texto1) // string

const stringNumeros = '5656565'
console.log(stringNumeros + 1000) // junta, não soma!

const citacao = 'Então ele disse a todos: "Sejam bem vindos!"'
console.log(citacao)

// comparações
const entrada = "Ponta Grossa";
const cidade = "ponta grossa";
console.log(entrada === cidade); // false

const entradaMinuscula = entrada.toLowerCase();
const entradaMaiuscula = entrada.toUpperCase();

console.log(entradaMinuscula === cidade); // true

const senha = "10131454454565";
console.log('Comprimento da senha ' + senha.length);
if (senha.length < 20){
    console.log('Senha precisa ter no mínimo 20 dígitos');
}

// Codificação Unicode
// unicode-table.com/pt
const cifrao = '\u0024';
console.log(cifrao)

const verificacao = '\u2705';
console.log(verificacao)