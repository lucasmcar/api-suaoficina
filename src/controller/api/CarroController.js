const CarroClass = require('../../classes/Carro');
const MarcaClass = require('../../classes/Marca');
const con = require("../../../config/database/db");

//consulta todos os veiculos
exports.verTodos = (req, res) =>{
    con.query('SELECT * FROM tb_carro', (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//consulta carro placa
exports.verCarroPorPlaca = (req, res) =>{
    var placa = req.params.placa;
    const carroClass = new CarroClass();
    carroClass.Placa = placa
    con.query('SELECT nome FROM tb_carro WHERE placa = ?', [carroClass.Placa], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//consulta carro pela marca
exports.verCarrosPorMarca = (req, res) =>{
    var marca = req.params.marca;
    const marcaClass = new MarcaClass( null ,marca);
    con.query('SELECT c.nome as veiculo, m.nome as marca  FROM tb_carro c INNER JOIN tb_marca m on c.marca_id= m.id WHERE m.nome = ?', 
    [marcaClass.Nome], (err, results) =>{
        if(err) {console.log(err);}
        res.statusCode = 200;
        res.json(results);
    });
};

exports.cadastrarCarro = (req, res) => {
    let {nome, cor, nrportas, tipo, ano, placa, marca_id, cliente_id} = req.body;
    const carroClass = new CarroClass(nome, cor, nrportas, tipo, ano, placa, marca_id, cliente_id);
    con.query('INSERT INTO tb_carro (nome, cor, nrportas, tipo, ano, placa, marca_id, cliente_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [carroClass.Nome, carroClass.Cor, carroClass.NrPortas, carroClass.Tipo, carroClass.Ano, carroClass.placa, carroClass.MarcaId, carroClass.ClienteId], 
    (err, results) =>{
        if(err){throw err};
        res.statusCode = 200;
        res.json(results);
    });   
}