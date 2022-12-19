// função para preencher os campos do formulario
const preencher_formulario = (produto) => {

    document.getElementById('id').value = produto.id;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('categoria').value = produto.categoria;
    document.getElementById('preco').value = produto.preco.toString().replace('.',',');
    document.getElementById('quantidade').value = produto.quantidade;
    document.getElementById('url').value = produto.url;


}


document.addEventListener('DOMContentLoaded', () => {
    // alert('ok');
    // recupera o valor parametro id
    // ex: http://127.0.0.1:5500/alterar.html

    // obtém a url
    const queryString = window.location.search;
    // Obtem os parametros da URL, q no nosso caso, é o id
    const urlParams = new URLSearchParams(queryString);
    // agora leio o valor do id
    const id = urlParams.get('id');
    console.log(id);

    // solicita ao servidor o produto referente ao id
    fetch('http://localhost:3000/produtos/' + id)

    // converte a resposta em formato json
    .then((res) => res.json())

    // recebe os dados da resposta
    .then((data) => {
        if (data.length > 0) {
            //console.log(data);
            // recupera produto do array da posição 0
            const produto = data[0];
            preencher_formulario(produto);
        } else {
            alert ('Erro: nenhum produto retornado na busca por id');
        }

    // captura erro desconhecido se houver
    }).catch(() => alert("Erro ao buscar produto por id no banco de dados"));

});

// Atualiza dados do formulário via método PUT
const atualizar = () =>{

    if (!validar_formulario())
        return;

    // JSON = Javascript Object Notation
    const dados = {
        id : document.getElementById('id').value,
        descricao : document.getElementById('descricao').value,
        categoria : parseInt(document.getElementById('categoria').value),
        preco : parseFloat(document.getElementById('preco').value.replace(',','.')),
        quantidade : parseInt(document.getElementById('quantidade').value),
        url : document.getElementById('url').value 
    }

    fetch('http://localhost:3000/produtos', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
        // converte resposta do servidor em objeto json
    }).then((res) => res.json()
    
        // pega objeto json retornado e impime
    ).then((data) => {
        console.log(data);

    }).then(() => {
        console.log('Produto atualizado com sucesso!');
        location.href = 'gerenciar.html';

    }).catch((erro) => {
        alert('Erro ao atualizar dados do produto ' + erro);

    });
}  

    
    
