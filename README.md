
# Formacao-NodeJS

Curso focando em back-end Node

# O que é NodeJS?

- Todo navegador tem um interpretador de JS. O NodeJS é um interpretador JavaScript que roda fora dos navegadores.

# Por que usar NodeJS?

- Muito Leve
- Muito rapido
- Usa JavaScript
- Tem um dos Maiores EcoSistemas do mundo
- Está sendo utilizado fortemente no mercado

# O que é HTTP

- requisição
- resposta

- Protocolo que move a web

# Primeira aplicação HTTP

- App.js

```javascript
var http = require("http");

http.createServer(function(req,res){
    res.end("<h1>Bem vindo ao meu site</h1>")
}).listen(8181);

console.log("Servidor Online")
```

# O que Express.js e NPM

- npm -v

- npm init

- npm install express --save


# Rotas

- São caminhos
- URL


-Index.js

```javascript
const express = require("express") // Importando o express
const app = express();// inicinando o express

app.listen(4000,function(error){
    if(error){
        console.log("Ocorreu um Erro")
    }else{
        console.log("Servidor Iniciado")
    }

});


app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao Site</h1>")
})

app.get("/blog",function(req,res){
    res.send("<h1>Bem vindo ao Meu Blog</h1>")
})

app.get("/youtube",function(req,res){
    res.send("<h1>Bem vindo ao Meu youtube</h1>")
})
```
