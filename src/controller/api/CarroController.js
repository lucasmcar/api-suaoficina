const CarroClass = require('../../classes/Carro');
const Carro = require('../../model/Carro');
const Marca = require('../../model/Marca');

exports.verTodos = (req, res) =>{
    Carro.findAll()
    .then(carross => {
        res.status = 200
        res.json(carros);
    });
};

exports.verCarroPorPlaca = (req, res) =>{
    var placa = req.params.placa;
    const carroClass = new CarroClass();
    carroClass.Placa = placa
    Carro.findOne({
        where: {
            placa: carroClass.Placa
        }
    }).then(carro => {
        res.statusCode = 200
        res.json(carro); 
    }).catch(err =>{
        console.log(err);
    });
};

exports.verCarrosPorMarca = (req, res) =>{
    var marca = req.params.marca;
    Carro.findAll({
        include: [{
            model: Marca,
            required: true,
            where : { nome : marca }
        }]
    }).then(carro => {
        res.statusCode = 200
        res.json(carro); 
    }).catch(err =>{
        console.log(err);
    });
};

exports.cadastrarCarro = (req, res) => {
    let {nome, cor, nrportas, tipo, ano, placa} = req.body;
    const carroClass = new CarroClass(nome, cor, nrportas, tipo, ano, placa);
        Carro.create({
        nome: carroClass.Nome,
        cor: carroClass.Cor,
        nrportas: carroClass.NrPortas,
        tipo: carroClass.Tipo,
        ano: carroClass.Ano,
        placa: carroClass.Placa 
    }).then(() => {
        res.status = 200;
    }).catch(err =>{
        console.log(err);
    });     
}

//include: [{model: Brand,  attributes: ['name']}],