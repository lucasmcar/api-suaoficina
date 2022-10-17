const ClienteClass = require('../../classes/Cliente')
const con = require("../../../config/database/db");
const { json } = require('express');

//Rota listagem de clientes
exports.verClientes = (req, res) =>{
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
    let {nome, email,celular} = req.body;
        const clienteClass = new ClienteClass(null, nome, celular, email);
        con.query('INSERT INTO tb_cliente () values ()', 
        [clienteClass.Nome, clienteClass.Telefone, clienteClass.Email],
        (err, results) => {
            if(err){res.json('{"status_code": 400, "status" : "erro", "msg" : '+err+'"}')}
            res.statusCode = 200;
            res.json(res.affectedRows);
        })
}

exports.atualizarCliente = (req, res) =>{

}

exports.removerCliente = (req, res) =>{
    
}


exports.testePage = (req, res) =>{
    res.render('index');
};




