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
});

app.get('/usuarios/name', (req, res) => {
    const { nome } = req.params;
    const usuarios = usuarios.find(v => v.name === name);
    if (usuarios){
        res.json(usuarios);
    } else {
        res.status(404).json({ message: 'Usuário não escontrado!'})
    }
});

app.post('/usuarios', (req, res) => { //cria aplicacoes web e API's
    console.log(req.body) //retorna o corpo da requisição
    users.push(req.body) //envia mensagens para o array(users)
    res.status(201).json(users) //retorna o status 201 e os usuarios
});

app.post('/usuarios', (req, res) => {
    const { name, email, idade, sexo } = req.body;
    const usuarios = { name, email, idade, sexo };
    usuarios.push(req.body)
    res.status(201).json({ message:'Usuario cadastrado com sucesso' })
});

app.put('/usuarios/:email', (req, res) => {
    const { email } = req.params;
    const { idade, sexo } = req.body;
    const usuarios = usuarios.find(v => v.email === email)
    if (usuarios) {
        usuarios.idade = idade || usuarios.idade;
        usuarios.sexo = sexo || usuarios.sexo;

        res.json({ message: 'As informações do usuário foram atualizadas com sucesso.' })
    } else {
        res.status(404).json({ message:'Usuário não encontrado' })
    }
});

app.delete('/usuarios/:email', (req, res) => {
    const { email } = req.params;
    const usuariosIndex = usuarios.findIndex(v => v.email === email)
    if (usuariosIndex !== -1) {
        usuarios.splice(usuariosIndex, 1);  /*splice:remover ou substituir os elementos*/ 
        res.json({ message: 'Usuario exluido com sucesso!' })
    } else {
        res.status(404).json({ message:'Usuario não encontrado.' })
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando")
});