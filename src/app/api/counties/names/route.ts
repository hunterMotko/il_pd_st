import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const q = `
  SELECT ARRAY_AGG(name) AS names 
  FROM counties
  ORDER BY 1 ASC
  `;
  try {
    const result = await query(q, []);
    if (!result) return NextResponse.json({ error: "Q ERROR" }, { status: 400 });
    return NextResponse.json(result.rows[0].names, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "S ERROR" + e }, { status: 500 });
  }
}
