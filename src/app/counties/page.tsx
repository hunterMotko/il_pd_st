import CountyMap from "@/components/counties/CountyMap";
import { feature } from "topojson-client";
import topo from '../../../public/counties-topo.json';
import { client } from "@/lib/db";

async function getNow() {
  try {
    const results = await client('SELECT NOW()')
    const rows = results?.rows
    console.log(rows)
  } catch (error) {
    console.log('query ERR: ', error)
  }
}

export default async function CountiesPage() {
  getNow()
  const json = JSON.parse(JSON.stringify(topo))
  const topoJson = feature(json, json.objects.counties);

  return (
    <CountyMap json={topoJson} />
  );
}
