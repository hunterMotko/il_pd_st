"use client";
import AppProvider from "@/components/common/Provider";
import { useId } from "@/components/common/Provider";
import { getData } from "@/lib/api";
import { useEffect, useState } from "react";
import { DistrictData } from "@/types";
import ColorLegend from "@/components/common/ColorLegned";
import Select from "@/components/common/Select";
import MainTable from "@/components/districts/MainTable";
import SubTable from "@/components/districts/SubTable";

function Layout(props: any) {
  const [id] = useId();
  const [data, setData] = useState<DistrictData | null>(null);
  const [legend, setLegend] = useState(null);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let url = `/api/districts/legend`;
        const l = await getData(url);
        url = `/api/districts/ids`;
        const n = await getData(url);
        setLegend(l);
        setIds(n);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async (id) => {
      try {
        if (id !== 0) {
          const url = `/api/districts/${id}`;
          const data = await getData(url)
          setData(data);
        }
      } catch (error) {
        console.error(error);
      }
    })(id);
  }, [id]);

  if (data && !!legend) {
    const { subTable, ...rest } = data;
    return (
      <div className="mx-auto h-full relative md:h-screen md:flex md:justify-center my-4">
        {props.children}
        <div className="h-full w-fit flex flex-col justify-center text-neutral">
          <Select data={ids} flag={"Districts"} />
          <MainTable data={rest} />
          <SubTable data={subTable} />
          <ColorLegend legend={legend} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full relative md:h-screen md:flex md:justify-center my-4">
        {props.children}
        <div className="mx-auto my-auto h-fit w-fit border-2 border-purple-900 text-purple-900 rounded p-3">
          <Select data={ids} flag={"Districts"} />
          <h1 className="card-title text-2xl">
            Click a district to show
          </h1>
        </div>
      </div >
    );
  }
}

export default function LayoutContainer(props: any) {
  return (
    <AppProvider>
      <Layout {...props} />
    </AppProvider>
  );
}
