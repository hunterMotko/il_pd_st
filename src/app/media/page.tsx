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
  return (
    <div className="container mx-auto">
      <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16">
        <h1 className="w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
          Media
        </h1>
        <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-2">
          {d.map((item: ArticleData) => <Article key={item.title} {...item} />)}
        </div>
      </section>
    </div>
  )
}

function Article({ title, author, date, linkTitle, link }: ArticleData) {
  return (
    <div className="flex flex-col items-start gap-3 overflow-hidden pb-2 border-b">
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>
      <p className="inline-flex items-center justify-start gap-2">
        <span className="text-xs leading-none text-slate-400">
          By: {author}
        </span>
        <span className="size-1.5 rounded-full bg-blue-700" />
        <span className="text-xs leading-none text-slate-400">
          {date}
        </span>
      </p>
      <Link href={link} target="_blank" className="italic text-purple-800 hover:text-blue-500">{linkTitle}</Link>
    </div>
  );
};
