// para testar db.js com node

(async () =>{

    const db = require('./db');

    console.log('Pesquisando produtos');
    const produtos = await db.selecionaProdutos();
    console.log(produtos[2]);


}) ();