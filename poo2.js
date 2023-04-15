// classe mãe
class Animal {

    //declara variáveis privadas
    #especie
    #nome
    #barulho



    // construtor da classe Animal
    constructor(especie, nome, barulho){
        this.#especie = especie
        this.#nome = nome
        this.#barulho = barulho
    }

    // funções getter para leitura das variáveis
    get especie(){
        return this.#especie
    }

    get nome(){
        return this.#nome
    }

    get barulho(){
        return this.#barulho
    }

    // funções  setter - permite alterar propriedades privadas
    set especie(especie){
        if (especie == '') {
            // lança um erro
            throw new Error('Valor do parâmetro especie inválido')
        }
        this.#especie = especie
        }

        // método privado
        #montarJSON() {
            return {
                especie: this.#especie,
                nome: this.#nome,
                barulho: this.#barulho
            }
        }

        mostrarJSON() {
            console.log('\nDados em formato JSON: ', this.#montarJSON())
        }
    }

gato = new Animal('Mamifero', 'tom', 'MIAU MIAU')
gato.especie = 'Felino'
console.log(gato.especie)
gato.mostrarJSON()







