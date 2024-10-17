import Link from "next/link";
import json from "../../../public/media.json"

type ArticleData = {
  title: string,
  author: string,
  date: string,
  linkTitle: string,
  link: string
}

export default function NewsPage() {
  const d = JSON.parse(JSON.stringify(json))
  const supporting = "Coverage of Public Defense in Illinois"
  const indigent = "Coverage of Public Defense Systems in Other States"

  return (
    <div className="container mx-auto">
      <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16">
        <h1 className="w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
          Media
        </h1>
        <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-1 md:gap-6 xl:grid-cols-1">
          <h2 className="text-3xl font-bold my-3">
            {supporting}
          </h2>
          {d.supporting.map((item: ArticleData) => <Article key={item.title} {...item} />)}
          <h2 className="text-3xl font-bold my-3">
            {indigent}
          </h2>
          {d.indigent.map((item: ArticleData) => <Article key={item.title} {...item} />)}
        </div>
      </section>
    </div>
  )
}

function Article({ title, date, linkTitle, link }: ArticleData) {
  return (
    <div className="flex flex-col items-start gap-3 m-1 p-1 pb-2 border-b">
      <Link href={link} target="_blank" className="hover:underline hover:text-purple-800">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </Link>
      <p className="inline-flex items-center justify-start gap-2">
        <span className="text-xs leading-none text-slate-400">
          {date}
        </span>
        <span className="size-1.5 rounded-full bg-blue-700" />
        <span className="text-xs leading-none text-slate-400">
          {linkTitle}
        </span>
      </p>
    </div >
  );
};
