const db = require('./conexao');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//Criar um endpoint para listar todos os produtos
app.get('/funcionarios', (req, res)=>{
    db.query('SELECT * FROM vw_func_setor_assoc', (erro, resultado)=>{
        if(erro){
           return res.json({"mensagem":"Falha ao consultar"});
        }
        return res.json(resultado); 
        console.log('Servidor rodando na porta 3000');
        console.log('Conectado ao banco de dados');
    });
});//Fim do endpoint GET/produtos 

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
});


