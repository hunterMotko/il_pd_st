import { query } from "@/lib/db";
import { NextResponse } from "next/server";
import { findQuartiles } from "@/utils/helpers";

export async function GET() {
  const queryStr = `SELECT c.circuit, SUM(s.attorney) AS shortfall 
    FROM counties c
    LEFT JOIN shortfalls s
    ON c.id = s.county_id
    GROUP BY c.circuit
    ORDER BY shortfall ASC
    `
  try {
    const result = await query(queryStr, []);
    if (!result) {
      return NextResponse.json({ error: "Q ERROR" }, { status: 400 });
    }
    const quartiles = findQuartiles(result.rows.map((row: { circuit: number, shortfall: number }) => row.shortfall));
    return NextResponse.json(quartiles, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "S ERROR" + e }, { status: 500 });
  }
}
