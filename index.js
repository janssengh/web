// index.js

(async () => {
    // carrega o modulo db.js
    const db = require('./db');
    console.log('Iniciando index...')

    console.log('Inserindo cliente...')
    // const retorno1 = await db.insereCliente({nome: 'Zé', fone:'(42)3028-0449', idade:23, uf:'PR'})
    // console.log(retorno1)
    // db.insereCliente({nome: 'Zé', fone:'(42)3028-0449', idade:23, uf:'PR'});

    console.log('Pesquisando clientes...');
    // [clientes] retornar somente as linhas de dados
    const clientes = await db.selecionaClientes();
    console.log(clientes);

    console.log('Atualizando cliente');
    const retorno2 = await db.atualizaCliente(1, 
        {nome: 'João da Silva', fone: '(42)3224-0704', idade:23, uf:'SC'});
        console.log(retorno2);

        console.log('Apagando cliente...');
        const retorno3 = await db.deletaCliente(2);
        console.log(retorno3);
})()


