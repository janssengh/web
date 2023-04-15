// Exportacao de módulos
// módulo é um arquivo contendo várias classes javascript

// para trabalhar com módulos precisamos criar o aquivo package.json
// npm init -y
// depois inserimos "type": "module" em qualquer local do arquivo

export default class Usuario {
    #nome

    constructor(nome) {
        this.#nome = nome
    }

    get nome() {
        return this.#nome
    }
}

export class Login {
    #email

    constructor(email){
        this.#email = email
    }

    get email(){
        return this.#email
    }
}

export class Cliente{
    #nome

    constructor(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }
}