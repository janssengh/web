function enviar(){

    if (!validar_formulario())
        return;

    const dados = {
        descricao : document.getElementById('descricao').value,
        categoria : parseInt(document.getElementById('categoria').value),
        preco : parseFloat(document.getElementById('preco').value),
        quantidade : parseInt(document.getElementById('quantidade').value),
        url : document.getElementById('url').value
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    
    // converte a resposta do servidor em objeto json
    }).then((res) => res.json()
    
    // pega objeto json retornado (são os dados) e ...
    ).then((data) => {
        console.log(data);
        
    }).then(() => {
        console.log('Sucesso ao cadastrar produto');
        location.href = 'gerenciar.html';

    }).catch((erro) => {
        alert('Erro ao cadastrar produto: ' + erro);
        // falta algo
    });


    return;
}