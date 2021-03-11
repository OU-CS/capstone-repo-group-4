import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT as string),
})

export async function databaseQuery<T>(sqlQuery: string): Promise<T[]> {
    try {
        const res = await pool.query<T>(
            sqlQuery
        );
        return res.rows;
    } catch (err) {
        throw err.stack;
    }
}


