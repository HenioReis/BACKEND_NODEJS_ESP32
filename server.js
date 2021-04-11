const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const dado = {
    nome1:'joao',
    nome2:'pedro',
    nome3: 'paulo'
}

app.get('/get/:id', (req, res)=>{
    const id = req.params.id;
    res.send(id);
});

app.post('/post', (req, res)=>{
    
});

app.put('/put', (req, res)=>{
    
});

app.listen('3000', ()=>{
   console.log('Server rodando na porta 3000');
});