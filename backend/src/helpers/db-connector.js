const { Pool } = require('pg')
require('dotenv').config()

pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

function databaseQuery(sqlQuery) {
    pool.query(sqlQuery, (err, res) => {
        console.log(err, res.rows) 
        pool.end() 
    })
}

module.exports = { databaseQuery }

