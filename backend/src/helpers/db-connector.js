const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

async function databaseQuery(sqlQuery) {
    try {
        const res = await pool.query(
            sqlQuery
        );
        return res.rows;
    } catch (err) {
        return err.stack;
    }
}

module.exports = { databaseQuery }

