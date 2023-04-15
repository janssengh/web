
// função construtora

function Personagem(nome, frase){
    this.nome = nome
    this.frase = frase
}

// depois adicionamos a função falar ao protótipo da função construtora
Personagem.prototype.falar = function(){
    console.log(`\nOLá! Eu sou ${this.nome}`)
    console.log(`${this.frase}`)
}


// agora criamos um objeto usando o operador new 
optimus = new Personagem('OPtimus Prime', 'Sem sacrifício não há vitória')
// ctrl J
// node poo1
optimus.falar()

// outro objeto personagem
tioDoPeterParker = new Personagem('Tio Bem', 'Com gramdes poderes vem grandes responsabilidades')
tioDoPeterParker.falar()

//======= Usando classes para criar objetos =======

class Retangulo {
    // função construtora da classe
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
}

// agora instancia um objeto
const quadrado = new Retangulo(60, 50)
console.log(`\nquadrado largura: ${quadrado.largura}`)
console.log(`quadrado altura: ${quadrado.altura}`)

const retang = new Retangulo(100, 500)
console.log(`\nRetangulo largura: ${retang.largura}`)
console.log(`Retangulo altura: ${retang.altura}`)

// outro exemplo de classe
class Cliente {

    // função construtora
    constructor(nome, email){
        this.nome = nome
        this.email = email
    }

    // função interna da classe
    exibir(){
        console.log(`\nCliente: ${this.nome} ${this.email}`)
    }
}

const lojaJS = new Cliente('Loja JS', 'lojajs@gmail.com')
lojaJS.exibir()

//===== adicionando métodos a uma classe =====
class Figura {

    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }


    //variável
    static nomeClasse = 'Figura'

    // função para calcular a área
    calcArea() {
    return this.largura * this.altura
    }

    // função getter
    get area() {
        return this.calcArea()
    }
}

// cria objewto
const fig1 = new Figura(20,10)
const fig2= new Figura(30,30)
console.log(`\nArea da figura: ${fig1.area}`)

Figura.nomeClasse = 'Retangulo'
Figura.nomeClasse = 'Quadrado'
console.log(`Nome da figura 1: ${Figura.nomeClasse}`)
console.log(`Nome da figura 2: ${Figura.nomeClasse}`)

// ==== Aproveitando o recurso de herança de clases ====
// super classe ou classe mãe
class Veiculo {

    // construtor do Veículo
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    // funções não estáticas, pertencem a objetos!
    ligar(){
        console.log('Veiculo ligado')
    }

    abastecer(){
        console.log('Veiculo abastecendo')
    }

    rodar(){
        console.log('Veiculo rodando')
    }

    exibirInfos(){
        console.log(`\nMarca ${this.marca} Modelo: ${this.modelo} Ano: ${this.ano}`)

    }
}

// depois criamos uma classe filha ou subclasse que herda todos os métodos do Veículo
class Carro extends Veiculo {

    // constructor do carro
    constructor(marca, modelo, ano){
        // super chama o constructor da super classe (classe mãe)
        super(marca, modelo, ano)
    }

    // sobrescreve o método herdados do Veiculo
    ligar(){
        console.log('Carro ligado')
    }
}

// outra subclasse
class Motocicleta extends Veiculo {
    // construtor da motocicleta
    constructor(marca, modelo, ano, cilindrada){
        // super chgama o construtor da super classe (classe mãe)
        super(marca, modelo, ano)
        this.cilindrada = cilindrada
    }

    ligar(){
        console.log('Motocicleta ligado')
    }

    // sobrescreve o método herdado de Veiculo
    exibirInfos(){
        console.log(`\nMarca: ${this.marca} Modelo:${this.modelo} Ano:${this.ano}) Cilindrada: ${this.cilindrada}`)

    }

}

// agora vamos criar os objetos destas classes
const veiculo = new Veiculo('Fiat', 'Palio', 2015)
veiculo.exibirInfos()
console.log(veiculo instanceof Veiculo) // sim é um Veículo
veiculo.ligar()
veiculo.abastecer()
veiculo.rodar()

const gol = new Carro('VW', 'Gol', 2020)
gol.exibirInfos()

// objeto polmórfico (polimorfismo)
console.log(gol instanceof Veiculo) // sim é um Veiculo
console.log(gol instanceof Carro)
gol.ligar()

const xre = new Motocicleta('Honda', 'XRE 300', 2021, 6)
xre.exibirInfos()
console.log(xre instanceof Veiculo)   // é um Veiculo
console.log(xre instanceof Carro)   // não é um Carro
console.log(xre instanceof Motocicleta)   // também é uma Motoclicleta
xre.ligar()
