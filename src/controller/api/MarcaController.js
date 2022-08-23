const Marca = require("../../model/Marca");

exports.verMarcas = (req, res) =>{
    Marca.findAll({
        
    })
    .then(clientes => {
        res.status = 200
        res.json(clientes);
    })
};

exports.verMarcaPorId = (req, res) =>{
    var id = req.params.id;
    Marca.findOne({
        where: {
            id: id
        }
    }).then(marca => {
        res.statusCode = 200
        res.json(marca); 
    }).catch(err =>{
        console.log(err);
    })
}