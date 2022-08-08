//index.js
const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')
//seta os arquivos estaticos da aplicação como imagens/css/ javasript do front-end
app.use(express.static('public'));


app.get("/", (req, res) => { 
  res.render("index")
});

app.get("/perguntar",(req,res)=>{
  res.render("perguntar")
})

app.post("/salvarpergunta",(req,res)=>{
  res.send("Dados recebidos!!!")
})

app.listen(4000, () => {
  console.log("App rodando!");
});
