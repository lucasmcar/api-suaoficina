const Cliente = require('../../src/model/Cliente');

//Rota listagem de clientes
exports.verClientes = (req, res) =>{
    Cliente.findAll({
        //include: [{model: Brand,  attributes: ['name']}],
    })
    .then(clientes => {
        res.status = 200
        res.json(clientes);
    })
};

//Listagem de cliente por id
exports.verClientePeloId = (req, res) =>{
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
}

//cadastro novo cliente
exports.inserirCliente = (req, res) =>{
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
                    }).catch(err =>{
                        console.log(err);
                    });
                }
                
            }
        } else {
            res.redirect('/');
        }
}

exports.atualizarCliente = (req, res) =>{

}

exports.removerCliente = (req, res) =>{
    
}


exports.testePage = (req, res) =>{
    res.render('index');
};




