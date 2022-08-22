const Sequelize = require('sequelize');

const con = require('../../config/database/database');

const Carro = con.define('tb_carro', {
    nome: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    cor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nrportas:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

//Carro.sync({force: true});

module.exports = Carro;