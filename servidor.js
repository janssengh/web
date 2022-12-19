/* 
Requisições http:

1. Lista um único curso - GET 
   http://localhost:3000/cursos/0

2. Lista todos os cursos - método GET
   http://localhost:3000/cursos

3. Salva um novo curso - método POST
   JSON:
   {
      'nome': 'Curso Design Grafico'
   }

4. Atualiza um curso - método PUT
   http://localhost:3000/cursos/0
   JSON
   { 
        'nome": 'Curso Node Js'
   }

5. Deleta um curso - método DELETE
   http://localhost:3000/cursos/0
   
*/

const { Console } = require('console');
const express = require('express');
// cria um servidor http
const server = express();
// api.postmon.com.br/v1/cep/84145-000 - formato JSON
// configura para usar json (objeto javascript)
server.use(express.json)

//                 0            1               2               3
const cursos = ['Curso Web', 'Curso Java', 'Curso Python', 'Cursao Php']

// Função GET: Retorna um curso
// Objetos recebidos: request e response
server.get('/cursos/:index', (req, res) => {
    const {index} = req.params;
    console.log(ind);
    return res.json(cursos[index]);

})



// roda o servidor na porta 3000
server.listen(3000);