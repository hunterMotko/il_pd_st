"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { useId } from "@/components/common/Provider";
import { geoMercator, geoPath } from "d3-geo";
import { useState, useEffect, useMemo } from "react";
import { getData } from "@/lib/api";

const Map = ({ json }: { json: any }) => {
  const [data, setData] = useState<LegendData | null>(null);
  useEffect(() => {
    (async () => {
      try {
        let url = `/api/districts/colors`;
        const result = await getData(url)
        setData(result)
      } catch (e) {
        console.error(e)
      }
    })();
  }, [])

  const { width, height } = useWindowSize();
  const [_, setCur] = useId()
  const classStr = (width <= 767) ? "relative h-full w-full" : "relative h-full w-4/6";
  const preserve = (width <= 767) ? "xMinYMid meet" : "xMidYMax slice";
  const projection = useMemo(() => geoMercator().fitSize([width, height], json), [width, height, json]);
  const path = useMemo(() => geoPath().projection(projection), [projection])
  const fillColors = ["fill-indigo-300", "fill-indigo-400", "fill-indigo-500", "fill-indigo-600", "fill-indigo-700"];

  const districts = json.features.map((section: any) => {
    const id = section.properties.id;
    const d = path(section.geometry) || '';
    let filterFill = !!data ? fillColors[data[id] - 1] : "fill-stone-400"
    return (
      <path
        key={id}
        className={`${filterFill} stroke-black stroke hover:fill-purple-900`}
        onClick={() => setCur(id)}
        d={d}
      />
    )
  })

  return (
    <div className={classStr}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="100%"
        preserveAspectRatio={preserve}
        className="snap-center"
      >
        <g>
          {districts}
        </g>
      </svg>
    </div>
  );
};

export default Map;

