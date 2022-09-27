/* const Sequelize = require('sequelize');

const con = require('../../config/database/database');

const Cliente = require('./Cliente');
const Marca = require('./Marca');

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
    ano: {
        type: Sequelize.DATE,
        allowNull: false
    },
    placa: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {freezeTableName: true});

//Carro.belongsTo(Cliente);
//Carro.belongsTo(Marca);//
//Carro.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));;

module.exports = Carro; */