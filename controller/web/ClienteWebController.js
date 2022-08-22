const express = require('express');
const router = express.Router();
const ClienteWeb = require('../../src/model/Cliente');

//Rota listagem de clientes
router.get('/clientes', (req,res) =>{
    Cliente.findAll({
        //include: [{model: Brand,  attributes: ['name']}],
    })
    .then(clientes => {
        res.statusCode = 200
        res.json(clientes);
    })

});

//Listagem de cliente por id
router.get('/clientes/:id', (req, res) => {
    var id = req.params.id;
    Cliente.findOne({
        where: {
            id: id
        }
    }).then(cliente => {
        res.statusCode = 200
        res.json(cliente); 
    }).catch(err =>{
        console.log(err);
    })
});

//pagina para teste, apagar depois
router.get('/novo',  (req, res) =>{
    res.render('index');
});



//cadastro novo cliente
router.post('/novo/cliente', (req, res) =>{
    let {nome, email,celular} = req.body;

        if(nome != undefined || nome != ""){
            if(email != undefined || email != "") {
                if(celular != undefined || celular != ""){
                    Cliente.create({
                        nome: nome,
                        email: email,
                        celular: celular,
                    }).then(() => {
                        res.redirect('/');
                    })
                }
                
            }
        } else {
            res.redirect('/');
        }

});

//cadastro de endereço do cliente
router.post('/novo/cliente/endereço', (req, res) =>{
    let {logradouro, numero, bairro, cep} = req.body;
});

module.exports = router;