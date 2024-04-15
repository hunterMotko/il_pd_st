import { query } from "@/lib/db";
import { NextResponse } from "next/server";

const groupLegend = (data: LegendQuery[]) => {
  const ranges: Legend = {}
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    if (i <= 19) {
      ranges[name] = 1;
    } else if (i > 19 && i < 41) {
      ranges[name] = 2;
    } else if (i > 40 && i < 61) {
      ranges[name] = 3;
    } else if (i > 60 && i < 81) {
      ranges[name] = 4;
    } else if (i > 80 && i <= 101) {
      ranges[name] = 5;
    }
  }
  return ranges;
}

export async function GET() {
  const q = `
    SELECT c.name, s.attorney AS shortfall 
    FROM counties c
    LEFT JOIN shortfalls s
    ON c.id = s.county_id
    ORDER BY s.attorney`;

  try {
    const result = await query(q, []);
    if (!result) return NextResponse.json({ error: "Q ERROR" }, { status: 400 });
    const legendSteps = groupLegend(result.rows);
    return NextResponse.json(legendSteps, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "S ERROR" + e }, { status: 500 });
  }
}

