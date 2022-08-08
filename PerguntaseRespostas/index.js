//index.js
const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')


app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
  res.render("index",{
    //front-end : back-end
    nome : nome,
    lang : lang,
    empresa : "SICOOB",
    salario : 5400,
    msg : exibirMsg
  })
});

app.listen(4000, () => {
  console.log("App rodando!");
});
