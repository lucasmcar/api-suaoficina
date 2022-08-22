const Sequelize = require('sequelize');

const con = require('../../config/database/database');
const Carro = require('./Carro');

const Marca = con.define('tb_marca', {
    nome: {
        type: Sequelize.STRING,
        allowNull : false,
    },
    imgsrc: {
        type: Sequelize.STRING,
        allowNull: true
    },
});


Marca.hasMany(Carro);
//Marca.sync({force: true});

module.exports = Marca;