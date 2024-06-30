const mysql = require('mysql2/promise'); 
const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'password',
    database: 'avanta_retail'
});
module.exports = pool;
