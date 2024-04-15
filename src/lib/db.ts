import { Pool } from 'pg';

export const pool = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: false
    });
  } else {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
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

export const query = async (text: string, params: Params[] = []) => await pool.query(text, params);
