//index.js
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')
//seta os arquivos estaticos da aplicação como imagens/css/ javasript do front-end
app.use(express.static('public'));
//Decodificar os dados enviados pelo formulario
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => { 
  res.render("index")
});

app.get("/perguntar",(req,res)=>{
  res.render("perguntar")
});

app.post("/salvarpergunta",(req,res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao
  res.send("Formulario Recebido Titulo: "+titulo+" Descrição: "+descricao )
});

app.listen(4000, () => {
  console.log("App rodando!");
});
