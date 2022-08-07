# [Projeto #01] Criando uma plataforma de perguntas e Respostas


## Plataforma de perguntas e respostas

- Bem similar ao yahoo respostas

## EJS e criação de projeto

- EJS

- Para instalar o EJS use `npm install ejs --save`

## Configurando e exibindo HTML com EJS

- É necessario criar uma pasta views

- Utiliza ``res.render`` para renderizar o HTML

```html
<!--index.ejs-->

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perguntas e Respostas</title>
</head>
<body>
    
</body>
</html>
```

```JavaScript
//index.js
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
```
## Exibindo variaveis no HTML

- Utilize a tag ``<%= "variavel" %>``

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perguntas e Respostas</title>
</head>
<body>
    <!-- Exibir valor de uma variavel EJS-->
    <%= nome %>
    <%= lang %>
    <%= empresa %>
    <%= salario %>

    <p>Nome:<%= nome %></p>
    <p>Linguagem de programação favorita: <%= lang %></p>
    <p>Empresa em que mais se destaca:  <%= empresa %></p>
    <p>Salario:  <%= salario %> </p>

</body>
</html>
```

```JavaScript 
const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
  res.render("index",{
    nome : nome,
    lang : lang,
    empresa : "SICOOB",
    salario : 5400
  })
});

app.listen(4000, () => {
  console.log("App rodando!");
});
```