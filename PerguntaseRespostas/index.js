//index.js
const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')
//seta os arquivos estaticos da aplicação como imagens/css/ javasript do front-end
app.use(express.static('public'));


app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
      {nome:"Doritos", preco: 3.14},
      {nome:"Coca-Cola", preco: 5.50},
      {nome:"Leite", preco: 1.19},
      {nome:"Carne", preco: 15.90},
      {nome:"Red-Bull", preco: 20.80},
      {nome:"Nescau", preco: 1.70}
    ]

  res.render("index",{
    //front-end : back-end
    nome : nome,
    lang : lang,
    empresa : "SICOOB",
    salario : 5400,
    msg : exibirMsg,
    listadeProdutos:produtos
  })
});

app.listen(4000, () => {
  console.log("App rodando!");
});
