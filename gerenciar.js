
const tipo_categoria = ['Cereais', 'Suplementos', 'Temperos'];

// exclui uma linha da tabela e do banco de dados
const excluirDaTabela = (id) => {

    fetch('http://localhost:3000/produtos/' + id, {
        method: 'DELETE'
    
    // então apaga da tabela
    }).then(() => {
        document.getElementById(id).remove();

    
    }).catch(() => {
        alert('Erro ao excluir produto do banco de dados')
    })
}


const adicionarNaTabela = (dados) => {

    const tabela = document.getElementById('tabela');

    dados.forEach(produto => {            
       
        const tamanhoTabela = tabela.rows.length;
        //alert(tamanhoTabela);

        // insere uma nova linha na tabela
        const linha = tabela.insertRow(tamanhoTabela);

        // adiciona o id no elemento criado
        linha.id = produto.id;

        // insere as células da linha
        const id = linha.insertCell(0);
        const descricao = linha.insertCell(1);
        const categoria = linha.insertCell(2);
        const preco = linha.insertCell(3);
        const quantidade = linha.insertCell(4);
        const imagem = linha.insertCell(5);
        const alterar = linha.insertCell(6);
        const excluir = linha.insertCell(7);

        // preenche as células com os dados do produto
        id.innerHTML = produto.id;
        descricao.innerHTML = produto.descricao;
        categoria.innerHTML = tipo_categoria[produto.categoria];
        preco.innerHTML = produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        quantidade.innerHTML = produto.quantidade;

        const url = produto.url.toLowerCase();

        // imagem da web
        if (url.substring(0, 4) == 'http'){          
            imagem.innerHTML = '<img src=' + url + ' width="100" class="img-thumbnail" alt="Foto do Produto">';
        
            // imagem da galeria
        } else {
            imagem.innerHTML = '<img src=galeria/' + url + ' width="100" class="img-thumbnail" alt="Foto do Produto">';     
        }

        alterar.innerHTML = '<a href="alterar.html?id=' + produto.id + '" class="btn btn-outline-success">Alterar</a>';
        excluir.innerHTML = '<button class="btn btn-outline-danger" onclick="excluirDaTabela(' + produto.id + ')">Excluir</button>';      





        id.innerHTML = produto.id;

    });
}


// evento será executadi somente depois que toda a pagina html estiver carregada
document.addEventListener('DOMContentLoaded', () => {

    // solicita ao servidor rodando na porta 3000 a lista de todos os produtos
    fetch('http://localhost:3000/produtos')

    // converte a resposta do servidor em formato json
    .then((res) => res.json())

    // depois recebe os dados do json
    .then((dados) => {
        console.log(dados)
        adicionarNaTabela(dados);
    })
    // se houver algum erro...
    .catch(() => alert('Erro ao consultar produtos no banco de dados'));

});