const express = require('express')

const app = express()

app.use(express.json())//minha aplicacao vai usar json

const users = [
    {
        name: 'Karina',
        email:'annakarina203@gmail.com',
        idade: 18,
        sexo: 'feminino'
    },
]

app.get('/usuarios', (req, res) => {
    res.json(users) //retorna os usuarios, envia respostas em formato json
})

app.post('/usuarios', (req, res) => { //cria aplicacoes web e API's
    console.log(req.body) //retorna o corpo da requisição
    users.push(req.body) //envia mensagens para o array(users)
    res.status(201).json(users) //retorna o status 201 e os usuarios
})

app.listen(3000, () => console.log("Servidor rodando")) //escuta as requisições vindas da porta 3000