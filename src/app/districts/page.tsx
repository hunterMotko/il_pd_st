import { feature } from "topojson-client";
import topo from '../../../public/districts-topo.json'
import DistrictMap from "@/components/districts/DistrictMap";

export default async function DistrictsPage() {
  const json = JSON.parse(JSON.stringify(topo))
  const topoJson = feature(json, json.objects.districts);
  return (
    <DistrictMap json={topoJson} />
  );
}
