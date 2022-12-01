const express = require('express');
const app = express();

app.get('/', function (req, res){
    console.log(req.headers)
    res.send("Oi Meu Chapá, é Nois")
})

app.listen(4000, () => {
    console.log("Servidor tá rodando em http://localhost:4000")
});

