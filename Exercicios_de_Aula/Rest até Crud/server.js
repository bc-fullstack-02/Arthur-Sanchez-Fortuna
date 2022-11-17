const http = require("http")

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
    res.write("AEEE, FIZ ESSE TRECO RODAR")
    res.end()
    }
});

server.on('cannection', (stream) => {
    console.log('some one connected')})

    
server. listen(4000);
console.log ('server listen on http://localhost:4000, ou seja ta rodando na porta 4k')