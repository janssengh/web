// true ou false

const num1 = 123;
const num2 = 456;
const num3 = 123;
const logado  = true;
const inscrito = false;

console.log(num1 === num2);
console.log(num1 === num3);
console.log(typeof inscrito);

const texto1 = 'hoje';
const texto2 = 'Hoje';
console.log(texto1 ==== texto2);// false

// linguagem case sensitive = sensivel ao caso
const minhaVar = 1;
const MinhaVar = 'texto';
const minhavar = "3";
const MINHAVAR = true;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

// formas de escrever uma variavel
// camelCase, snake_case, kebab-case (não pode ser usada no javascript), PascalCase

// Tipos null e undefines
let entrada = null;
let entrada2; // undefined

console.log(entrada) // null
console.log(entrada2) // undefined

if (entrada === null){
    console.log('Variavel nula');
}

if (entrada2 === undefined){
    console.log('Variavel não definida');
}

// comparando
console.log(null == undefined); //true
console.log(null === undefined); // false



