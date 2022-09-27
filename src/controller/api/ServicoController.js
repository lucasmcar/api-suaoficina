//const Etapa = require('../../classe/Etapa');
//const Servico = require('../../model/Servico');
//const Status = require('../../model/Status');


exports.cadastrarServico = (req, res) => {
    /*let {titulo, descricao, data_entrada, data_entrega} = req.body;
    var nros = parseInt(req.body.nros);
    var preco = parseFloat(req.body.preco);
        if(titulo != undefined || titulo != ""){
            if(!isNaN(nros) && (nros != undefined || nros != "")) {
                if(descricao != undefined || descricao != ""){
                    Servico.create({
                        titulo: titulo,
                        nros: nros,
                        descricao: descricao,
                        preco : preco,
                        data_entrada : data_entrada,
                        data_entrega : data_entrega
                    }).then(() => {
                        res.redirect('/');
                    }).catch(err =>{
                        console.log(err);
                    });
                }
                
            }
        } else {
            res.redirect('/');
        }*/
}


exports.todosServicos = (req, res)=>{
    /*Servico.findAll().then((servicos)=>{
        res.status = 200
        res.json(servicos);
    }).catch(err =>{
        console.log(err)
    });*/
}

exports.servicoPorOS = (req, res) =>{

}

exports.servicoPorCarro = (req, res) =>{

}


/*exports.verEtapaServico= (req, res) =>{
    var nros = req.params.nros;
    Servico.findAll({
        where: {
            nros: nros
        },
        include :[
            {
                model: Etapa, 
                required: true, 
                attributes: ['nome_etapa', 'data_entrada', 'data_saida'],
                include : [
                    {
                        model: Status,
                        required: true,
                        attributes: ['fase']
                    }
                ]
            }
        ]
    }).then(servico => {
        res.statusCode = 200
        res.json(servico); 
    }).catch(err =>{
        console.log(err);
    });
}*/
