const Sequelize = require('sequelize');

const con = new Sequelize('DB_SUAOFICINA', 'root', 'Lucas1990', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = con;