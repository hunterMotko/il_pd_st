import CountyMap from "@/components/counties/CountyMap";
import { feature } from "topojson-client";
import topo from '../../../public/counties-topo.json';

export default async function CountiesPage() {
  const json = JSON.parse(JSON.stringify(topo))
  const topoJson = feature(json, json.objects.counties);

  return (
    <CountyMap json={topoJson} />
  );
}
