"use client";
import AppProvider from "@/components/common/Provider";
import { useId } from "@/components/common/Provider";
import { getData } from "@/lib/api";
import { CountyData } from "@/types";
import { useEffect, useState } from "react";
import MainTable from "@/components/counties/MainTable";
import SubTable from "@/components/counties/SubTable";
import ColorLegend from "@/components/common/ColorLegned";
import Select from "@/components/common/Select";

function Layout(props: any) {
  const [name] = useId();
  const [data, setData] = useState<CountyData | null>(null);
  const [legend, setLegend] = useState<string[][] | null>(null);
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let url = `/api/counties/legend`;
        const l = await getData(url);
        url = `/api/counties/names`;
        const n = await getData(url);
        setLegend(l);
        setNames(n);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async (name: string | number) => {
      try {
        if (name !== "" && name !== 0) {
          const url = `/api/counties/${name}`;
          const data = await getData(url);
          setData(data);
        }
      } catch (error) {
        console.error(error);
      }
    })(name);
  }, [name]);

  if (data && !!legend && !!names) {
    const { subTable, ...rest } = data;

    return (
      <div className="h-full relative md:h-screen md:flex md:justify-center my-4">
        {props.children}
        <div className="mx-auto h-full w-fit flex flex-col justify-center text-neutral">
          <Select data={names} flag={"County"} />
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
          <Select data={names} flag={"County"} />
          <h1 className="card-title text-2xl">
            Click a county to show
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
