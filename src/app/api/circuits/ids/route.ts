import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const q = `
    SELECT ARRAY(
      SELECT DISTINCT circuit 
      FROM counties 
      GROUP BY circuit 
      ORDER BY 1 ASC
    ) AS circuits;
  `;
  try {
    const result = await query(q, []);
    if (!result) return NextResponse.json({ error: "Q ERROR" }, { status: 400 });
    return NextResponse.json(result.rows[0].circuits, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "S ERROR" + e }, { status: 500 });
  }
}

