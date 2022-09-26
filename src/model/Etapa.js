const Sequelize = require('sequelize');
const con = require('../../config/database/database');
const Servico = require('./Servico');
const Status = require('./Status');

const Etapa = con.define('tb_etapa', {
    nome_etapa: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    descricao : {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_saida:{
        type: Sequelize.DATE,
        allowNull: false
    },
}, {freezeTableName: true});
Etapa.belongsTo(Status);
Etapa.belongsTo(Servico);
//Etapa.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));

module.exports = Etapa;