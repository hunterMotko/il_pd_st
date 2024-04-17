import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  ssl: {
    rejectUnauthorized: false
  }
});

type Params = string | number | boolean | Date | null | undefined;

export const query = async (text: string, params: Params[] = []) => await pool.query(text, params);
