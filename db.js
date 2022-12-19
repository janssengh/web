// faz a conexão com o bando de dados
async function conectar(){

    // verifica se já tem uma conexão
    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao;

    // cria objeto com suporte a promise para comunicação com o banco
    const mysql = require('mysql2/promise');

    // cria uma conexão assíncrona com o banco
    const conexao = mysql.createConnection('mysql://root:softgraf@localhost:3306/mundoverde');
    global.conexao = conexao;
    
    return conexao;
}

// retorna todos os produtos do banco de dados
async function selecionaProdutos(){
    const con = await conectar();
    // retorna somente as linhas de dados
    const [rows] = await con.query('SELECT * FROM Produtos');
    return await rows;
}


async function buscaPorId (id) {
    const con = await conectar();
    const sql = 'SELECT * FROM Produtos WHERE id=?';
    const [rows] = await con.query(sql, id);
    return await rows;
}

async function deletaProduto (id){
    const con = await conectar();
    const sql = 'DELETE FROM Produtos WHERE id=?';
    return await con.query(sql, id);
}

async function insereProduto(produto){
    const con = await conectar();
    const sql = 'INSERT INTO Produtos (descricao, categoria, preco, quantidade, url) VALUES (?, ?, ?, ?, ?)';
    const valores = [produto.descricao, produto.categoria, produto.preco, 
                     produto.quantidade, produto.url];
    return await con.query(sql, valores);
}

async function atualizaProduto(id, produto){
    const con = await conectar();
    const sql = 'UPDATE produtos SET descricao=?, categoria=?, preco=?, quantidade=?, url=? WHERE id=?';
    const valores = [produto.descricao, produto.categoria, produto.preco, produto.quantidade, produto.url, id];
    return await con.query(sql, valores);
}

module.exports = {selecionaProdutos, buscaPorId, deletaProduto, insereProduto, atualizaProduto}