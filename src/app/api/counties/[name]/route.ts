import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { toDollar, toLocale } from "@/utils/helpers";
import { TableKeys, CountyData } from '@/types'

const setData = (d: any): CountyData => ({
  [TableKeys.County]: toLocale(d.name),
  [TableKeys.Circuit]: d.circuit === 25 ? 'Cook' : d.circuit,
  [TableKeys.District]: d.district,
  [TableKeys.Population]: toLocale(d.population),
  [TableKeys.PDFY23Budget]: toDollar(d.pd_fy_23),
  [TableKeys.SAFY23Budget]: toDollar(d.sa_fy_23),
  [TableKeys.AnnualCriminalFilings]: toLocale(d.criminal),
  [TableKeys.AnnualJuvenileFilings]: toLocale(d.juvenile),
  subTable: {
    [TableKeys.DefenseAttorneys]: d.attorney,
    [TableKeys.Investigators]: d.investigator,
    [TableKeys.MentalHealthStaff]: d.mental_health,
    [TableKeys.SupportStaff]: d.support
  },
});

export async function GET(_: any, { params }: { params: { name: string } }) {
  if (!params.name) {
    return NextResponse.json({ error: "Missing params.name" }, { status: 400 });
  }

  const q = `
SELECT
  c.name,
  c.population,
  c.circuit,
  c.district,
  b.pd_fy_23,
  b.sa_fy_23,
  f.criminal,
  f.juvenile,
  Array[ a.total, r.attorney, s.attorney ] AS attorney,
  Array[ a.investigator, r.investigator, s.investigator ] AS investigator,
  Array[ a.mental_health, r.mental_health, s.mental_health ] AS mental_health,
  Array[ a.support, r.support, s.support] AS support
FROM
  counties c
LEFT JOIN budgets b ON c.id = b.county_id
LEFT JOIN filings f ON c.id = f.county_id
LEFT JOIN allocations a ON c.id = a.county_id
LEFT JOIN required r ON c.id = r.county_id
LEFT JOIN shortfalls s ON c.id = s.county_id
Where name = $1;
`;
  try {
    const result = await query(q, [params.name]);

    if (!result) {
      return NextResponse.json({ error: "County not found" }, { status: 404 });
    }
    const data = setData(result.rows[0]);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
