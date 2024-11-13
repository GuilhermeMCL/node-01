import http from "node:http"


//req => requisição // res => resposta
const server = http.createServer((req, res) => {
return res.end('hello world')
})

server.listen(3333)