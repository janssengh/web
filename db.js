// db.js

// cria ou retorna uma conexao com o banco de dados
async function conectar(){
    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao;

    // cria objeto com suporte a promise para comunicacao com o banco      
    const mysql = require('mysql2/promise');
    // cria a conexao com o banco de dados
    const conexao = mysql.createConnection('mysql://root:softgraf@localhost:3306/empresa');
    // console.log('conectou no mysql'); ver se conectou
    global.conexao = conexao;
    return conexao;
}

// conectar(); //teste

async function insereCliente(cliente){
    const con = await conectar(); // aguarda (await) uma conexao
    // evitar SQL INJECTION
    const sql = 'INSERT INTO clientes (nome, fone, idade, uf) VALUES (?, ?, ?, ?);';
    // cria um array contendo 4 valores
    const valores = [cliente.nome, cliente.fone, cliente.idade, cliente.uf];    
    
    // substitui em sql as interrogações pelos valores do array
    // retorna os dados inseridos
    return await con.query(sql, valores);

}

async function selecionaClientes(){
    // faz a conexao com o banco de dados
    const con = await conectar();
    // retorna somente as linhas (rows) de dados do banco (sem metadados)
    const[rows] = await con.query('select * from clientes');
    return rows;
}

async function atualizaCliente(id, cliente) {
    const con = await conectar();
    const sql = 'update clientes set nome=?, fone=?, idade=?, uf=? where id=?';
    const valores = [cliente.nome, cliente.fone, cliente.idade, cliente.uf, id];
    return await con.query(sql, valores)
}

async function deletaCliente(id){
    const con = await conectar();
    const sql = 'delete from clientes where id=?';
    return await con.query(sql, id);
}
module.exports = {insereCliente, selecionaClientes, atualizaCliente, deletaCliente} ;
