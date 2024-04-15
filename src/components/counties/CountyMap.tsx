"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { geoMercator, geoPath } from "d3-geo";
import { useState, useEffect, useMemo } from "react";
import { useId } from "@/components/common/Provider";
import { getData } from "@/lib/api";

const CountyMap = ({ json }: { json: any }) => {
  const [data, setData] = useState<LegendData | null>(null)
  useEffect(() => {
    (async () => {
      try {
        const url = '/api/counties/colors'
        const data = await getData(url);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const { width, height } = useWindowSize();
  const [_, setCur] = useId()
  const classStr = (width <= 767) ? "relative h-full w-full" : "relative h-full w-4/6";
  const preserve = (width <= 767) ? "xMinYMid meet" : "xMidYMax slice";
  const projection = useMemo(() => geoMercator().fitSize([width, height], json), [width, height, json]);
  const path = useMemo(() => geoPath().projection(projection), [projection])
  const fillColors = [
    "fill-indigo-300",
    "fill-indigo-400",
    "fill-indigo-500",
    "fill-indigo-600",
    "fill-indigo-700",
  ];

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
          {json.features.map((section: any) => {
            const name = section.properties.name;
            const d = path(section.geometry) || '';
            let filterFill = data ? fillColors[data[name] - 1] : "fill-stone-400"
            return (
              <path
                key={name}
                className={`${filterFill} stroke-black stroke hover:fill-purple-900`}
                onClick={() => setCur(name)}
                d={d}
              />
            )
          })}
        </g>
      </svg>
    </div>
  );
};

export default CountyMap;
