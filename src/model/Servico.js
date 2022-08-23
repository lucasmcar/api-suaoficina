const Sequelize = require('sequelize');
const Cliente = require('./Cliente');
const Status = require('./Status');
const con = require('../../config/database/database');

const Servico = con.define('TB_SERVICO', {
    titulo: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    nros :{
        type: Sequelize.INTEGER,
        allwNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    data_entrada :{
        type : Sequelize.DATE,
        allowNull : false
    },
    data_entrega: {
        type : Sequelize.DATE,
        allowNull: false
    }
});

Servico.belongsTo(Cliente);
Servico.hasMany(Status);

//Servico.sync({force: true});

module.exports = Servico;

/**
 * O serviço tem como dados importantes o titulo, o numero da ordem de serviço, a descrição, o valor e a data da entrega
 */