const Usuario = require('../model/Usuario')

async function abreadd(req,res){
    res.render("usuario/add.ejs",{});
    
}

async function add(req,res) {
 const   { nome, email, senha, foto } = req.body;
 await Usuario.create({nome, email, senha, foto }).then((usuario)=>{
     res.send("Seu Usuario foi criado!");
 })

}

async function list(req,res) {
    await Usuario.findAll().then((usuario)=>{
        res.render('usuario/list.ejs', {Usuario: usuario})
    })
}

async function filtro(req,res) {}

async function abreedit(req,res) {}

async function edit(req,res) {}

async function del(req,res) {}

module.exports = { abreadd, add, list, filtro, abreedit, edit, del };

