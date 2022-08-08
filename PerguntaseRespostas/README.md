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

## Estruturas condicionais

- If e Else

```html
<!--Index.ejs-->
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
    
    //mensagem vinda do back-end
    <%= msg %>

    //If sem o else
    <%if(msg==true){%>
        <h3>Isso é uma mensagem de erro!</h3>
    <%}%>
    

    //if e else
    <%if(msg ==true){%>
        <h3>Isso é uma mensagem de erro!</h3>
    <%}else{%>
        <h3>Nenhum erro!!!</h3>
    <%}%>

</body>
</html>
```

```javaScript
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
```

## Estruturas de repetição com EJS

- Uso do forEach

- <% listadeProdutos.forEach(function(produto){%>

```html
<!--Index.ejs-->
<!DOCTYPE html>

<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Perguntas e Respostas</title>
  </head>
  <body>
    <!-- Exibir valor de uma variavel EJS-->
    <%= nome %> <%= lang %> <%= empresa %> <%= salario %>

    <p>Nome:<%= nome %></p>
    <p>Linguagem de programação favorita: <%= lang %></p>
    <p>Empresa em que mais se destaca: <%= empresa %></p>
    <p>Salario: <%= salario %></p>


    <h1>Lista do Mercado</h1>

    <% listadeProdutos.forEach(function(produto){%>
        <h4><%= produto.nome %></h4>
        <h5><%= produto.preco %></h5>
        <hr>
    <% }) %>
  </body>
</html>

```
```javaScript

//index.js
const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs')


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

```