const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

// cria um servidor javascript usando express
const server = express();

// habilita resposta com objeto javascript
server.use(express.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use((req, res, next) => {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        next();
    }
);


// retorna todos os produtos
// método GET: http://localhost:3000/produtos
server.get('/produtos', async (req, res) => {
    const produtos = await db.selecionaProdutos();
    return res.json(produtos);
});

// busca um produto por id
// método GET: http://localhost:3000/produtos/1
server.get('/produtos/:index', async (req, res) => {
    const {index} = req.params;
    const produto = await db.buscaPorId(index);
    // retorna um array formato json contendo produto ou vazio
    return res.json(produto);
});

// método DELETE
server.delete('/produtos/:index', async(req, res) => {
    const {index} = req.params;
    const retorno = await db.deletaProduto(index);
    const apagou = retorno[0].affectedRows;   // 1 ou 0
    return res.json( {'apagou': apagou} );
});

// salva um produto
// método POST: http://localhost:3000/produtos
server.post('/produtos', async(req, res) => {
    const produto = req.body;
    console.log('== Conteúdo do body ====')
    console.log(produto);
    let retorno

    // salva um produto
    retorno = await db.insereProduto(produto);
    console.log(retorno);
    
    if (retorno[0].affectedRows == 1)
        res.json({sucesso: true});
    else
        res.json({sucesso: false});
});

// Atualiza um produto
// PUT: http://localhost:3000/produtos
server.put('/produtos', async(req, res) => {

    const produto = req.body; // recebe o objeto JSON enviado para atualizar
    console.log('=== Conteúdo do body:', produto, '======')
    // Envia o objeto JSON para o banco de dados atualizar
    const retorno = await db.atualizaProduto(produto.id, produto);

    /* se atualização for bem sucedida, será retornado um array no formato:
        [{'fieldCount': 0, 'affectedRows':1, 'insertId':99, etc}]
    */
    if (retorno[0].affectedRows ==1)
         res.json({sucesso: true});
    else
        res.json({sucesso: false});
})


// Roda o servidor na porta 3000
server.listen('3000', () => {
    console.log('Server iniciado')
});


