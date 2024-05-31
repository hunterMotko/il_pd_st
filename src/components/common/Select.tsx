"use client";
import { useEffect, useRef, useState } from "react";
import DownArrow from "@/components/nav/DownArrow";
import UpArrow from "@/components/nav/UpArrow";
import { useId } from "@/components/common/Provider";

const DropButton = ({ open, toggleArrows }: { open: boolean, toggleArrows: () => void }) => {
  return (
    <button
      className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
      onClick={toggleArrows}
    >
      {open ? <UpArrow /> : <DownArrow />}
    </button>
  )
}

const DropNames = (
  { list, listClick }: { list: string[] | number[], listClick: <T>(id: T) => void }
) => {
  return (
    <ul className="cursor-pointer w-full border-gray-100 rounded-t border-b">
      {list?.map((id) => (
        <li key={id}
          className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:bg-teal-100"
          onClick={() => listClick(id)}
        >{id}</li>
      ))}
    </ul>
  )
}

type OptionValue = number | string;
type Option<Type extends OptionValue> = Type;
type SelectProps<Type extends OptionValue> = {
  data: Option<Type>[];
  flag?: string;
};

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

function Select<Type extends OptionValue>({ data, flag }: SelectProps<Type>) {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(data);
  const [value, setValue] = useState<Type>((typeof data[0] === "number" ? 0 : "") as Type);
  const [_, setId] = useId();
  const drop = useRef<HTMLDivElement>(null);

  useClickOutside(drop, () => {
    setOpen(false);
    setValue("" as Type);
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!open) setOpen(true);
    if (e.target.value === "") {
      setValue("" as Type);
      setList(data);
      return
    }
    setValue(e.target.value as Type);
    if (!!data && typeof data[0] === "number") {
      let filetered: number[] = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i] === parseInt(e.target.value)) {
          filetered = [...filetered, data[i] as number];
        }
      }
      setList(filetered as Type[]);
    } else if (!!data && typeof data[0] === "string") {
      let filetered: string[] = []
      for (let i = 0; i < data.length; i++) {
        let item = data[i] as string;
        if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
          filetered = [...filetered, data[i] as string];
        }
      }
      setList(filetered as Type[]);
    }
  }

  function listClick<T>(id: T) {
    if (typeof id === "number") {
      setId(id as number);
    } else if (typeof id === "string") {
      setId(id as string)
    }
    setOpen(false)
    setValue("" as Type)
  }

  const toggleArrows = () => {
    if (!open) {
      setOpen(true);
      setList(data);
    } else {
      setOpen(false);
      setList([]);
      setValue("" as Type);
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (list?.includes(value) || list[0] === +value) {
      setId(value);
      setOpen(false);
      setValue("" as Type);
    } else {
      setOpen(false);
      setValue("" as Type);
    }
  }

  return (
    <div ref={drop} className="relative flex flex-col items-center">
      <div className="w-full">
        <div className="my-2 p-1 bg-white flex justify-between border border-gray-200 rounded">
          <form onSubmit={onSubmit}>
            <input
              placeholder={"Search by " + flag}
              className="p-1 appearance-none outline-none w-full text-gray-800"
              value={value}
              onChange={onChange}
            />
          </form>
          <div className="text-gray-300 w-10 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
            <DropButton open={open} toggleArrows={toggleArrows} />
          </div>
        </div>
      </div>
      <div className={`${open ? "absolute top-14 max-h-80" : "hidden"} shadow bg-white z-40 w-full rounded max-h-select overflow-scroll`}>
        {!!list &&
          <DropNames
            list={list as string[] | number[]}
            listClick={listClick}
          />}
      </div>
    </div>
  )
}

export default Select;
