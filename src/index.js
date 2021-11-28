const express = require("express");
const app = express();
const path - require("path");

require("./database/index")
app.use(express.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.send('Projeto!');

    app.set("view engine", "ejs");
    app.set("views","./src/views");

    app.use(express.static(path.join(__dirname,"public")));

});

app.listen(3000, function(req,res){
    console.log("Servidor Funcionando!");

});
