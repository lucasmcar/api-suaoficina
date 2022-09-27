/* const Sequelize = require('sequelize');

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
}, {freezeTableName: true});



//Cliente.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));;

module.exports = Cliente; */