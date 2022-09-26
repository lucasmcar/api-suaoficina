const Sequelize = require('sequelize');
const Cliente = require('./Cliente');
const con = require('../../config/database/database');
const Etapa = require('./Etapa');

const Servico = con.define('tb_servico', {
    titulo: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    nros :{
        type: Sequelize.INTEGER,
        allowNull: false
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
}, {freezeTableName: true});


Servico.belongsTo(Cliente);

const count = Servico.count().then(result => {console.log("Total de: " + result)});
console.log(count)
//Servico.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));

module.exports = Servico;

/**
 * O serviço tem como dados importantes o titulo, o numero da ordem de serviço, a descrição, o valor e a data da entrega
 */