import { NextResponse } from "next/server";
import { query } from "@/lib/db";

interface ColorQuery {
  circuit: number;
  attorney: number
}

const groupLegend = (data: ColorQuery[])=> {
  const ranges: Legend = {}
  for (let i = 0; i < data.length; i++) {
    let circuit = data[i].circuit;
    if (i < 5) {
      ranges[circuit] = 1
    } else if (i < 10) {
      ranges[circuit] = 2
    } else if (i < 15) {
      ranges[circuit] = 3
    } else if (i < 20) {
      ranges[circuit] = 4
    } else if (i < 25) {
      ranges[circuit] = 5
    }
  }
  return ranges;
}

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
    const ranges = groupLegend(result.rows)
    return NextResponse.json(ranges, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "S ERROR" + e }, { status: 500 });
  }
}

