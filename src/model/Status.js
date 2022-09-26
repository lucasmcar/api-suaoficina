const Sequelize = require('sequelize');

const con = require('../../config/database/database');

const Status = con.define('tb_status', {
    fase : {
        type: Sequelize.STRING,
        allowNull : false,
    }
}, {freezeTableName: true} );


//Status.sync({force: true}).then(result => console.log(result)).catch(err => console.log(err));;

module.exports = Status;