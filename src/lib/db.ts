import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.CERT
  }
});

type Params = string | number | boolean | Date | null | undefined;

export const query = async (text: string, params: Params[] = []) => await pool.query(text, params);
