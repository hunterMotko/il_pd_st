import { query } from "@/lib/db";
import { toDollar, toLocale } from "@/utils/helpers";
import { NextResponse } from "next/server";
import { DistrictData, TableKeys } from "@/types";

const setData = (id: string, d: any): DistrictData => ({
  [TableKeys.District]: id,
  [TableKeys.Population]: toLocale(+d.population),
  [TableKeys.PDFY23Budget]: toDollar(d.pd_fy_23),
  [TableKeys.SAFY23Budget]: toDollar(d.sa_fy_23),
  [TableKeys.AnnualCriminalFilings]: toLocale(+d.criminal),
  [TableKeys.AnnualJuvenileFilings]: toLocale(+d.juvenile),
  subTable: {
    [TableKeys.DefenseAttorneys]: [d.a_total, d.r_total, d.s_total],
    [TableKeys.Investigators]: [d.a_investigator, d.r_investigator, d.s_investigator],
    [TableKeys.MentalHealthStaff]: [d.a_mental_health, d.r_mental_health, d.s_mental_health],
    [TableKeys.SupportStaff]: [d.a_support, d.r_support, d.s_support]
  },
});

export async function GET(_: any, { params }: { params: { id: string } }) {
  if (!params.id) {
    return NextResponse.json({ error: "Missing params.id" }, { status: 400 });
  }

  const q = `
SELECT
  c.district,
  SUM(c.population) AS population,
  SUM(b.pd_fy_23) AS pd_fy_23,
  SUM(b.sa_fy_23) AS sa_fy_23,
  SUM(f.criminal) AS criminal,
  SUM(f.juvenile) AS juvenile,
  SUM(a.total) AS a_total, 
  SUM(r.attorney) AS r_total, 
  SUM(s.attorney) AS s_total, 
  SUM(a.investigator) AS a_investigator, 
  SUM(r.investigator) AS r_investigator, 
  SUM(s.investigator) AS s_investigator,
  SUM(a.mental_health) AS a_mental_health, 
  SUM(r.mental_health) AS r_mental_health, 
  SUM(s.mental_health) AS s_mental_health, 
  SUM(a.support) AS a_support, 
  SUM(r.support) AS r_support, 
  SUM(s.support) AS s_support
FROM
  counties c
LEFT JOIN budgets b ON c.id = b.county_id
LEFT JOIN filings f ON c.id = f.county_id
LEFT JOIN allocations a ON c.id = a.county_id
LEFT JOIN required r ON c.id = r.county_id
LEFT JOIN shortfalls s ON c.id = s.county_id
Where district = $1
GROUP BY c.district;
`;

  try {
    const result = await query(q, [params.id]);
    const data = setData(params.id, result.rows[0])
    if (!data) {
      return NextResponse.json({ error: "County not found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
