import { NextResponse } from "next/server";
import { query } from "@/lib/db";

interface ColorQuery {
  district: number;
  shortfall: number
}

const groupLegend = (data: ColorQuery[])=> {
  const ranges: Legend = {}
  for (let i = 0; i < data.length; i++) {
    let district = data[i].district;
    ranges[district] = i+1;
  }
  return ranges;
}

export async function GET() {
  const queryStr = `SELECT c.district, SUM(s.attorney) AS shortfall 
    FROM counties c
    LEFT JOIN shortfalls s
    ON c.id = s.county_id
    GROUP BY c.district
    ORDER BY shortfall ASC
    `
  try {
    const result = await query(queryStr, []);
    if (!result) {
      return NextResponse.json({ error: "Q ERROR" }, { status: 400 });
    }
    const res = groupLegend(result.rows);
    return NextResponse.json(res, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "S ERROR" + e }, { status: 500 });
  }
}
