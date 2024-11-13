import http from "node:http"

//GET => Buscar um recurso do back end
//POST => Criar um novo recurso no back end
//PUT => Atualizar um recurso no back end
//PATCH => Atualizar uma Informação especifica de um recurso no back end
//DELETE => Deletar um recurso no back end

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if(method == 'GET' && url == '/users'){
        return res.end('Listagem de usuarios')
    } //early return

    if(method == 'POST' && url== 'users'){
        return res.end('Criando um novo usuario')
    }

    return res.end('hello world')
})

server.listen(3333)
console.log("Servidor Rodando na Porta : 3333")