const ClienteClass = require('../../classes/Cliente')
const con = require("../../../config/database/db");

//Rota listagem de clientes
exports.verClientes = async (req, res) =>{
    con.query('SELECT * FROM tb_cliente', (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//Listagem de cliente por id
exports.verClientePeloId = (req, res) =>{
    var id = req.params.id;
    const clienteClass = new ClienteClass(id);
    con.query('SELECT * FROM tb_cliente WHERE id = ?', [clienteClass.Id], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
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




