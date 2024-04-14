"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import UpArrow from "@/components/nav/UpArrow";
import DownArrow from "@/components/nav/DownArrow";

function useClickOutside(ref: React.RefObject<HTMLDivElement> | null, onClickOutside: () => void) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref?.current && !ref?.current.contains(e.target as Node)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

type DropCardProps = {
  title: string
  sub: {
    title: string
    path: string
  }[]
}

const DropCard = ({ title, sub }: DropCardProps) => {
  const [open, setOpen] = useState(false);
  const drop = useRef<null | HTMLDivElement>(null);

  useClickOutside(drop, () => setOpen(false));

  return (
    <div className={`
      h-20 w-full md:4/5 my-auto shadow-lg 
      bg-purple-900 text-white 
      hover:bg-white hover:text-purple-900 hover:shadow-sm hover:border-2 hover:border-purple-900
      focus:bg-white focus:text-purple-900 focus:shadow-sm focus:border-2 focus:border-purple-900
      border rounded-md duration-300 
    `}
    ref={drop}
    >
      <button
        className="h-full w-full mx-auto flex justify-center items-center text-white hover:text-purple-900"
        onClick={() => setOpen(!open)}
      >
        <h5 className="text-2xl font-bold md:text-3xl">{title}</h5>
        {open ? <UpArrow /> : <DownArrow />}
      </button>
      <div
        className={`
        ${open ? "block" : "hidden"} relative z-10 mt-2 w-full 
        rounded-md border bg-purple-900 text-white shadow-lg
        duration-300
        `}
        role="menu"
      >
        {sub.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            prefetch={false}
            className="text-2xl block rounded-lg px-4 py-2 hover:underline"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DropCard
