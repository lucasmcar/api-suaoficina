const Cliente = require('../../model/Etapa');
const Status = require('../../model/Status');

//Rota listagem de clientes
exports.verEtapa = (req, res) =>{
    
};

exports.verEtapaPorServi├žo = (req, res) =>{
    /*Etapas.findAll({
        //include: [{model: Brand,  attributes: ['name']}],
    })
    .then(etapas => {
        res.status = 200
        res.json(etapas);
    })*/
};

exports.testePage = (req, res) =>{
    res.render('index');
};
