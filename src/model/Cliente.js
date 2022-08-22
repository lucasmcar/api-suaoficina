const Sequelize = require('sequelize');

const con = require('../../config/database/database');

const Cliente = con.define('tb_cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular:{
        type: Sequelize.STRING,
        allowNull: false
    },
});



//Cliente.sync({force: true});

module.exports = Cliente;