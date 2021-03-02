const { Pool } = require('pg')
require('dotenv').config()
    
console.log(process.env.DB_HOST);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

console.log(process.env.DB_USER);

databaseQuery("test");

function databaseQuery(sqlQuery) {
    pool.query('SELECT * FROM property', (err, res) => {
        console.log(err, res.rows) 
        pool.end() 
    })
}

module.exports = { databaseQuery }
