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

## Arquivos estaticos

- O nome public é usado por convenção, porem pode ser substituido por qualquer um

```javaScript
//seta os arquivos estaticos da aplicação como imagens/css/javasript do front-end
app.use(express.static('public'));
```

```javaScript
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
```
```html
<!--Index.ejs-->
<!DOCTYPE html>

<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css">
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

    <img src="/img/imgTeste.jpeg" alt="imagem de teste">
  </body>
</html>
```

## Apresentando e Instalando o Bootstrap

- Framework web
- Criação de sites responsivos
- [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- Versão utilizado no curso

```html
<!--Index.ejs-->
<!DOCTYPE html>

<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <title>Perguntas e Respostas</title>
  </head>
  <body>

    <h1>Estilo do boostrap</h1>
    
    
  </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <script src="/js/bootstrap.min.js"></script>
</html>

```

## Criando o formulario de perguntas

```html
<!--Index.ejs-->
<!DOCTYPE html>

<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <title>Perguntas e Respostas</title>
  </head>
  <body>

    <div class="container">
        <h3>
            Realizar pergunta
        </h3>
        <form action="">
            <label>Título</label>
            <input type="text" placeholder="Título" class="form-control">
            <br>
            <label> Descrição da pergunta</label>
            <textarea class="form-control" placeholder="Descreva sua pergunta aqui"></textarea>
            <br>
            <button class="btn btn-primary" type="button">Perguntar</button>
        </form>
    </div>
    
    
  </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <script src="/js/bootstrap.min.js"></script>
</html>

```

```Javascript
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

//http://localhost:4000/perguntar
app.get("/perguntar",(req,res)=>{
  res.render("perguntar")
})

app.listen(4000, () => {
  console.log("App rodando!");
});

```

## Adicionando card no formulario

```html
<!--Index.ejs-->
<!DOCTYPE html>

<html lang="pt">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <title>Perguntas e Respostas</title>
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Realizar pergunta</h3>
      </div>
      <div class="card-body">
        <form action="">
          <label>Título</label>
          <input type="text" placeholder="Título" class="form-control" />
          <br />
          <label> Descrição da pergunta</label>
          <textarea class="form-control" placeholder="Descreva sua pergunta aqui"></textarea>
          <br />
          <button class="btn btn-primary" type="button">Perguntar</button>
        </form>
      </div>
    </div>
  </div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="/js/bootstrap.min.js"></script>

</html>
```

## CSS customizado com bootstrap

- Deve se atentar em colocar o seu css após o css do bootstrap

```html
<link rel="stylesheet" href="/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/style.css" />
```