const Sequelize = require('sequelize');

const con = require('../../config/database/database');

const Status = con.define('tb_status', {
    etapa : {
        type: Sequelize.STRING,
        allowNull : false,
    },
    data_entrada :{
        type: Sequelize.Date,
        allwNull: false
    },
    data_finalizada: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


//Status.sync({force: true});

module.exports = Status;