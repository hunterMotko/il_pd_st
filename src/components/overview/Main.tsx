import Link from "next/link";

interface MainSection {
  title?: string,
  description?: (string | { href: string, text: string })[],
  list?: { title: string, description: string }[],
  paragraph?: string
}

function Main({ title, description, list, paragraph }: MainSection) {
  return (
    <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-8 py-12 2xl:py-16">
      <h1 className='w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl'>{title} </h1>
      <p className='mt-3'>{
        !!description && description.map((item: string | { href: string, text: string }, i: number) => (
          (typeof item === 'string') ? (<span key={i}>{item}</span>) :
            (<Link key={i} className='text-blue-500 hover:underline' href={item.href}>{item.text}</Link>)
        ))
      }</p>
      <ul className='list-disc mx-4 my-2 px-4'>
        {!!list && list.map(({ title, description }: { title: string, description: string }, i: number) => (
          <li key={i} className="">
            <span className="font-bold text-lg">{title}</span> {description}
          </li>
        ))}
      </ul>
      <p>{paragraph}</p>
    </section>
  )
}

export default Main;
