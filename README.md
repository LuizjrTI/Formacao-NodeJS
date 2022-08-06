
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
# Carregamento Automatico

- npm install nodemon -g -> Instalar globalmente

# Parametros

- localhost:4000/blog/qualquerinformação

```javascript

// index.js
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

//Parametro obrigatorio
app.get("/ola/:nome/:empresa", function(req,res){
    // req => Dados enviados pelo servidor
    // res => Respostas que vai ser enviada pelo usuario

    var nome = req.params.nome
    var empresa = req.params.empresa
    
    res.send("<h1>Oi "+ nome +" da "+ empresa +"</h1>")
})

//Parametro não obrigatorio
app.get("/blog/:artigo?", function(req,res){
    // req => Dados enviados pelo servidor
    // res => Respostas que vai ser enviada pelo usuario

    var artigo = req.params.artigo

    if(artigo) {
        res.send(`<h2>Artigo: ${artigo}</h2>`)
    } else {
        res.send("<h1>Bem vindo ao Meu Blog</h1>")
    }
    
    res.send("<h1>Oi "+ nome +" da "+ empresa +"</h1>")
})

```

# Query params

- Não são definidos na rota
- São completamente livres e opcionais.
- Entrando em desuso

```javascript
//index.js

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

//http://localhost:4000/canal/youtube?canal=luiz
app.get("/canal/youtube", function(req,res){

    var canal = req.query["canal"]
    //canal = luiz
    if(canal) {
        res.send(`<h1>Bem vindo ao ${canal}</h1>`)
    } else {
        res.send(`Nenhum canal passado!!`)
    }
    
})
```

# Instalando MySQL

- https://www.mysql.com/

- Faça o download do MySQL Community Server

# Tabelas

- Para logar no MySQL via cmd -> mysql -h localhost -u root -p

```SQL
-- Para ver todos os DataBases
SHOW DATABASES;
```

```SQL
--Para criar um Database
CREATE DATABASE sistemadecadastro;
```

```SQL
--Para acessar um Banco de Dados
USE sistemadecadastro;
```

```SQL
--Para listar todas as tabelas dentro do Banco de Dados
SHOW TABLES;
```

```SQL
--Para criar uma tabela dentro do Banco de Dados
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);
```

```SQL
--Para mostrar a estrutura da tabela dentro do Banco de Dados
DESCRIBE usuarios;
```

# Insert, Select e Where

```SQL
--Para inserir dados dentro tabela no Banco de Dados
INSERT INTO usuarios(nome,email,idade)
VALUES("Luiz Junior","email@teste.com",30);
```

```SQL
--Para listar os dados da tabela dentro do Banco de Dados
SELECT * FROM usuarios;
```

```SQL
--Para listar os dados da tabela com alguma condição a ser respeitada
SELECT * FROM usuarios WHERE idade = 30;
```

# Delete

- Erro gravissimo em Banco de Dados

```SQL
--Nunca em hipotese alguma use DELETE sem o WHERE
DELETE FROM usuarios;
```

- Forma correta de usar o DELETE

```SQL
--Para deletar um dado dentro da tabela
DELETE FROM usuarios WHERE nome = "Luiz";
```

# Update
- Erro gravissimo em Banco de Dados

```SQL
--Para atualizar um dado dentro da tabela
UPDATE usuarios SET nome = "Nome de Teste", email="email@teste2.com";
```

- Forma correta de usar o UPDATE

```SQL
--Para atualizar um dado dentro da tabela
UPDATE usuarios SET nome = "Nome de Teste", email = "email@teste2.com" WHERE nome = "Luiz";
```

# [Projeto #01] Criando uma plataforma de perguntas e Respostas


## Plataforma de perguntas e respostas

- Bem similar ao yahoo respostas

## EJS e criação de projeto

- EJS

- Para instalar o EJS use `npm install ejs --save`