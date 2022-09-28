const MarcaClass = require("../../classes/Marca");
const con = require("../../../config/database/db");

exports.verMarcas = (req, res) =>{
    con.query('SELECT id, nome FROM tb_marca', (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

exports.verMarcaPorId = (req, res) =>{
    var id = req.params.id;
    const marcaClass = new MarcaClass(id, null);
    con.query('SELECT nome FROM tb_marca WHERE id = ?', [marcaClass.Id], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
}

exports.editarMarca = (req, res) => {
    let {id, marca} = req.body;
    const marcaClass = new MarcaClass(id, marca);
    con.query('UPDATE tb_marca SET nome = ? WHERE id = ?', 
    [marcaClass.Nome ,marcaClass.id], 
    (err, results) => {
        if(err){throw err;}
        res.statusCode = 200;
        res.json(results.affectedRows)
    });
       
}

exports.apagarMarca = (req, res) => {
    let id = req.body.id;
    const marcaClass = new MarcaClass(id, null);
    if(id != undefined){
        con.query('DELETE FROM tb_marca WHERE placa = ?', [marcaClass.Id],
        (err, results) =>{
            if(err){ throw err;}
            res.statusCode = 200;
            res.json(results.affectedRows)
        });
    }
}

exports.cadastrarMarca = (req, res) => {
    let nome = req.body.nome;
    const marcaClass = new MarcaClass(null, nome);
    con.query('INSERT INTO tb_marca (nome) VALUES (?)', 
    [marcaClass.Nome], 
    (err, results) =>{
        if(err){throw err;}
        res.statusCode = 200;
        res.json(results.affectedRows);
    });   
}
