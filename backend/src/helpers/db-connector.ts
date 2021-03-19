import { Pool } from 'pg';

import { getSecret } from './get-secret';

export async function databaseQuery<T>(sqlQuery: string): Promise<T[]> {

    const secret: Record<string, string> = await getSecret(process.env.ROAM_RDS_SECRET);

    const pool = new Pool({
        user: secret.username,
        host: secret.host,
        database: secret.engine,
        password: secret.password,
        port: parseInt(secret.port as string),
    })


    try {
        const res = await pool.query<T>(
            sqlQuery
        );
        return res.rows;
    } catch (err) {
        throw err.stack;
    }
};
