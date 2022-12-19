const criarGaleriaProdutos=(dados) => {
    
    const galeria = document.getElementById('galeria');

    // pega cada produto do array dados e cria um card
    dados.forEach(p => {   
        
        let url = p.url.toLowerCase();
        if (url.substring(0,4) != 'http'){
            url = 'galeria/' + url;
        }

        const preco = p.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        const card_produto =
    
        '<div class="col">' +
            '<div class="card mb4" style="width: 18rem;">' +
                '<img class="card-img-top" src="' + url + '" alt="Foto do Produto">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + p.descricao + '</h5>' +
                    '<h6 class="card-subtitle mb2 text-muted">' + preco + '</h6>' +
                    '<p class="card-text">Restam: ' + p.quantidade + '</p>' +
                    '<p class="card-text">Cód.:' + p.id + '</p>' +
                    '<a href="#" class="btn btn-primary">Adicionar ao carrinho</a>' +
                '</div>' +
            '</div' +
        '</div>';
        

        galeria.innerHTML += card_produto;

    });
}


document.addEventListener('DOMContentLoaded', () => {

    // solicita ao servidor a lista de produtos
    fetch('http://localhost:3000/produtos')

    // converte a resposta em formato json
    .then((res) => res.json())

    // recebe o9s dados da resposta
    .then((data) => criarGaleriaProdutos(data))

    // se algo der errado, captura e mostra o erro
    .catch(() => alert('Erro ao consultar produtos no banco'));

});





