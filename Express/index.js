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

app.get("/canal/youtube", function(req,res){

    var canal = req.query["canal"]

    if(canal) {
        res.send(`<h1>Bem vindo ao ${canal}</h1>`)
    } else {
        res.send(`Nenhum canal passado!!`)
    }
    
})