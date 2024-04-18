import { Pool } from 'pg';

export const pool = (() => {
    return new Pool({
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      port: +process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      ssl: {
        rejectUnauthorized: false,
      }
    });
})();

export const client = async (text: string, params: Params[] = []) => {
  try {
    const c = await pool.connect()
    const res = await c.query(text, params)
    c.release()
    return res
  } catch (error) {
    console.error(error)
  }
}

type Params = string | number | boolean | Date | null | undefined;

export const query = (text: string, params: Params[] = []) => pool.query(text, params);
