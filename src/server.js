import http from "node:http"

//GET => Buscar um recurso do back end
//POST => Criar um novo recurso no back end
//PUT => Atualizar um recurso no back end
//PATCH => Atualizar uma Informação especifica de um recurso no back end
//DELETE => Deletar um recurso no back end

const users = []


const server = http.createServer(async(req, res) => {
    const { method, url } = req;

    const buffers = []

    for await (const chunk of req) {
    buffers.push(chunk)
    }

    try {
         req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null

    }



    if(method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type','applicaton/json')
            .end(JSON.stringify(users))

    } 

    if(method == 'POST' && url== '/users'){
        const {name , email} = req.body
        users.push({
            id: 1,
            name,
            email,
        })
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)