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