const mysql = require('mysql2');
const config = require('../config');

const con = mysql.createConnection(config);

module.exports = con;


