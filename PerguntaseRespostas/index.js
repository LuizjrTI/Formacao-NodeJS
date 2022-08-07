const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')


app.get("/", (req, res) => {
  res.render("index")
});

app.listen(4000, () => {
  console.log("App rodando!");
});
