import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.ROAM_RDS_SECRET['username'],
    host: process.env.ROAM_RDS_SECRET['host'],
    database: process.env.ROAM_RDS_SECRET['engine'],
    password: process.env.ROAM_RDS_SECRET['password'],
    port: parseInt(process.env.ROAM_RDS_SECRET['port'] as string),
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
