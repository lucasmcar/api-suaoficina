const Sequelize = require('sequelize');

const con = new Sequelize('SUAOFICINA_DB', 'root', 'Lucas1990', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = con;