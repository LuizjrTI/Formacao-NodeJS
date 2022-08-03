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