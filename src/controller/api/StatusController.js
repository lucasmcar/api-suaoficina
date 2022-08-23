const Status = require("../../model/Status");

exports.verStatusPorServico = (req, res) =>{
    Status.findAll({
        //include: [{model: Brand,  attributes: ['name']}],
    })
    .then(status => {
        res.status = 200
        res.json(status);
    })
};