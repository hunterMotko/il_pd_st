"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import UpArrow from "../nav/UpArrow";
import DownArrow from "../nav/DownArrow";

type Nav = {
  title: string, path: string
}
const Drop = ({ title, sub }: { title: string, sub: Nav[] }) => {
  const [open, setOpen] = useState(false);
  const drop = useRef<null|HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function close(e: Event) {
      if (drop.current && !drop.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open])

  return (
    <div className="relative">
      <button
        className="h-full w-full flex items-center text-white hover:text-blue-600"
        onClick={() => setOpen(!open)}
        ref={drop}
      >
        <span className="">{title}</span>
        {open ? <UpArrow /> : <DownArrow />}
      </button>
      <div
        className={`${open ? "block" : "hidden"} absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg`}
        role="menu"
      >
        <div className="p-2">
          {sub.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              role="menuitem"
              className="text-black block rounded-lg px-4 py-2 text-sm hover:underline hover:text-blue-600"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
interface NavItem {
  title: string;
  path: string;
  sub?: undefined;
}
interface SubItem {
  title: string;
  sub: {
    title: string;
    path: string;
  }[];
  path?: undefined;
}
const HeaderItems = ({ item }: { item: SubItem | NavItem }) => (
  <li key={item.title} className="relative">
    {item.hasOwnProperty("sub") ? (
      <Drop title={item.title} sub={item.sub as Nav[]} />
    ) : (
      item.path && (
       <Link href={item.path} className="block text-white hover:text-blue-600">
         {item.title}
       </Link>
      )
    )}
  </li >
)


export default HeaderItems;
