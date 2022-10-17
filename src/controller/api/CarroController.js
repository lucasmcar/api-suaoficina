const carroObj = require('../../classes/Carro')
const MarcaClass = require('../../classes/Marca');
const ClienteClass = require('../../classes/Cliente');

const con = require("../../../config/database/db");
const TABLE_NAME = 'carro';
//consulta todos os veiculos
exports.verTodos = (req, res) =>{
    con.query('SELECT * FROM ' + TABLE_NAME , (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//consulta carro placa
exports.verCarroPorPlaca = (req, res) =>{
    var placa = req.params.placa;
    carroObj.Placa = placa
    con.query('SELECT nome, nrportas, cor, ano, placa FROM '+ TABLE_NAME +' WHERE placa LIKE ?', ['%'+ carroObjss.Placa + '%'], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//consulta carro pela marca
exports.verCarrosPorMarca = (req, res) =>{
    var marca = req.params.marca;
    const marcaClass = new MarcaClass( null ,marca);
    con.query('SELECT c.nome as veiculo, m.nome as marca  FROM '+ TABLE_NAME + ' c INNER JOIN tb_marca m on c.marca_id= m.id WHERE m.nome = ?', 
    [marcaClass.Nome], (err, results) =>{
        if(err) {console.log(err);}
        res.statusCode = 200;
        res.json(results);
    });
};

exports.cadastrarCarro = (req, res) => {
    let {nome, cor, nrportas, tipo, ano, placa, idmarca, idproprietario} = req.body;
        /*nome = carroObj.Nome;
        cor = carroObj.Cor;
        nrportas = carroObj*/

    carroObj = {nome, cor, nrportas, tipo, ano, placa, idmarca, idproprietario}
    carroObj.MarcaId = marca_id;
    carroObj.ClienteId = cliente_id;
    con.query('INSERT INTO ' + TABLE_NAME +' (nmveiculo, nrportas, placa, cor, ano, tipo, idmarca, idproprietario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [carroObj.Nome, carroObj.Cor, carroObj.NrPortas, carroObj.Tipo, carroObj.Cor, carroObj.Ano, carroObj.placa, carroObj.MarcaId, carroObj.ClienteId], 
    (err, results) =>{
        if(err){throw err;}
        res.statusCode = 200;
        res.json(results);
    });   
}

exports.editarCarro = (req, res) => {
    let {nome, cor, nrportas, tipo, ano, placa} = req.body;
    const carroObjss = new carroObjss(nome, cor, nrportas, tipo, ano, placa);
    carroObjss.Placa = placa;
    nrportas = parseInt(nrportas);
    if(placa != undefined && (nome != undefined || 
        cor != undefined || 
        nrportas != 0 || tipo != undefined)){
        con.query('UPDATE '+ TABLE_NAME +' SET nome = ?, cor = ?, nrportas = ?, tipo = ?, ano = ? WHERE placa = ?', 
        [carroObjss.Nome, carroObjss.Cor, carroObjss.NrPortas, carroObjss.Tipo, carroObjss.Ano, carroObjss.Placa], 
        (err, results) => {
            if(err){throw err;}
            res.statusCode = 200;
            res.json(results.affectedRows)
        });
    }   
}

exports.apagarCarro = (req, res) => {
    let placa = req.body.placa;
    const carroObjss = new carroObjss(null, null, null, null, null, placa);
    carroObjss.Placa = placa;
    if(placa != undefined){
        con.query('DELETE FROM '+ TABLE_NAME +' WHERE placa = ?', [carroObjss.Placa],
        (err, results) => {
            if(err){ throw err;}
            res.statusCode = 200;
            res.json(results.affectedRows)
        });
    }
}

exports.retornaTotalCarros = (req, res) =>{
    con.query('select count(*) as total from '+ TABLE_NAME, (err, results) => {
        if(err){throw err;}
        res.statusCode = 200
      res.json(results);
    });
}

exports.retornaTotalCarrosPorCliente = (req, res) => {
    let nomeCliente = req.params.nome;
    const clienteClass = new ClienteClass(null, nomeCliente)
    con.query("SELECT count(c.nome) as total_carroObjcl.nome as proprietario from "+ TABLE_NAME +" c inner join tb_cliente cl on c.cliente_id = cl.id where cl.nome like ?", 
    ['%'+ clienteClass.Nome +'%'],
    (err, results)=>{
        if(err){throw err;}
        res.statusCode = 200;
        res.json(results);
    });
}