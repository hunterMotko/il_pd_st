import { feature } from "topojson-client";
import topo from '../../../public/judicial-topo.json'
import JudicialMap from "@/components/circuits/CircuitMap";

export default async function JudicialPage() {
  const json = JSON.parse(JSON.stringify(topo))
  const topoJson = feature(json, json.objects.judicialCircuit);

  return (
    <>
      <JudicialMap json={topoJson} />
    </>
  );
}
