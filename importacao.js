
import Usuario from './exportacao.js'
import Login from './exportacao.js'
import Cliente from './exportacao.js'

const user = new Usuario('João da Silva')
console.log(user.nome)

const login = new Login('Luiz')
console.log(login.nome)

const cliente = new Cliente('Valdeci')
console.log(cliente.nome)


