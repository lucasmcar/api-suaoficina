const ClienteClass = require('../../classes/Cliente')

//Rota listagem de clientes
exports.verClientes = async (req, res) =>{
    /*Cliente.findAll().then((clientes)=>{
        res.status = 200
        res.json(clientes);
    }).catch(err =>{
        console.log(err)
    });*/
};

//Listagem de cliente por id
exports.verClientePeloId = (req, res) =>{
    /*var id = req.params.id;
    const clienteClass = new ClienteClass();
    clienteClass.Id = id
    Cliente.findOne({
        where: {
            id: clienteClass.Id
        }
    }).then(cliente => {
        res.statusCode = 200
        res.json(cliente); 
    }).catch(err =>{
        console.log(err);
    });*/
}

//cadastro novo cliente
exports.inserirCliente = (req, res) =>{
    /*let {id, nome, email,celular} = req.body;
        const clienteClass = new ClienteClass(id, nome, celular, email)
            Cliente.create({
                nome: clienteClass.Nome,
                email: clienteClass.Email,
                celular: clienteClass.Telefone,
            }).then(() => {
                res.statusCode = 200
                res.json({"status": "ok", "result" : "Cliente cadastrado"});
            }).catch(err =>{
                console.log(err);
            });*/
}

exports.atualizarCliente = (req, res) =>{

}

exports.removerCliente = (req, res) =>{
    
}


exports.testePage = (req, res) =>{
    res.render('index');
};




