const path = require('path');
const fs = require('fs');

const express = require('express');
const e = require('express');
const app = express();

const router = express.Router();
app.use(express.json());

app.get('/', function (req, res) {
    console.log(req.headers)
    const content = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
    res.send(content)
})

const db = [
    {id: 'a460767c-6568-11ed-9022-0242ac120001', title: 'Salve DB1', body: 'Oi meu chapa, o sr goxta de pasçoca?', create_at: new Date()},
    {id: 'a460767c-6568-11ed-9022-0242ac120002', title: 'Salve DB2', body: 'Oi meu chapa, o sr goxta de pasçoca?', create_at: new Date()},
    {id: 'a460767c-6568-11ed-9022-0242ac120003', title: 'Salve DB3', body: 'Oi meu chapa, o sr goxta de pasçoca?', create_at: new Date()},
    {id: 'a460767c-6568-11ed-9022-0242ac120004', title: 'Salve DB4', body: 'Oi meu chapa, o sr goxta de pasçoca?', create_at: new Date()}
]

router
    .route('/posts')
    .all((req, res, next) =>{
        console.log(new Date())
        next()
    })
    .get((req, res) => {
        res.send(db)
    })
    .post((req, res) => {
        db.push(req.body);
        res.status(201);
        res.end();
    })

router.param('id', (req, res,next, id) => {
        console.log(req.body)
        console.log(new Date())
        next()
    })
    .route('/posts/:id')
    .get((req, res) => {
        const ret = db.find(e => e.id === req.params.id);
        if(ret) {
            res.send(ret);
        }else {
            res.status(404).end();
        }
    })
    .put((req, res) => {
        const ret = db.find(e => e.id === req.params.id);
        if (ret) {
            db = db.map((e) => {
                if(e.id === req.params.id) {
                    return req.body
                } else {
                    return
                }
            })
            res.status(202)
            res.end()
        } else {
            res.status(404).end()
        }
    })
    .delete((req, res) => {
        const ret = db.find(e => e.id === req.params.id);
        if (ret) {
            db = db.filter(e => e.id !== req.params.id);
            res.status(204);
            res.end();
        } else {
            res.status(404).end();
        }
    })

app.use(router);

app.listen(3000);
console.log ('server rodando na porta 3k')