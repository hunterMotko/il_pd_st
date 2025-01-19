import CountyMap from "@/components/counties/CountyMap";
import { feature } from "topojson-client";
import topo from '../../../public/counties-topo.json';
import { query } from '@/lib/db'

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

async function getColors() {
  const q = `
    SELECT c.name, s.attorney AS shortfall 
    FROM counties c
    LEFT JOIN shortfalls s
    ON c.id = s.county_id
    ORDER BY s.attorney`;
  try {
    const result = await query(q, []);
    const legendSteps = groupLegend(result.rows);
    return legendSteps
  } catch (e) {
    throw new Error('GET COLORS ERROR: ' + e)
  }
}

export default async function CountiesPage() {
  const data = await getColors()
  const json = JSON.parse(JSON.stringify(topo))
  const topoJson = feature(json, json.objects.counties);

  return (
    <CountyMap data={data} json={topoJson} />
  );
}
