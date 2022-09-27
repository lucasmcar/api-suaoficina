//const Endereco = require('../../model/Endereco');

exports.verEndereco = (req, res) =>{
    /*Endereco.findAll()
    .then(enderecos => {
        res.status = 200
        res.json(enderecos);
    });*/
};

/*exports.verCarroPorPlaca = (req, res) =>{
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
};*/

exports.cadastrarEndereco = (req, res) => {
    /*let {nome, cor, nrportas, tipo, ano, placa} = req.body;
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
    });     */
}