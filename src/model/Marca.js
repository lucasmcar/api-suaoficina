const Sequelize = require('sequelize');

const con = require('../../config/database/database');
/*const Carro = require('./Carro');

const Marca = con.define('tb_marca', {
    nome: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    imgsrc: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {freezeTableName: true});

//Marca.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));;

module.exports = Marca;*/