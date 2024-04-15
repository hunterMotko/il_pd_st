import Link from "next/link"

const Section = ({ source }: { source: Source[] }) => (
  <>
    {source.map((item: Source, k: number) => {
      if (!!item.url && !!item.title) {
        return (
        <li key={k} className='text-wrap my-2 -indent-10 ml-10'>
          {item?.author}
          {item?.sub}
          <Link className='text-blue-600 italic hover:underline' href={item.url}>{item.title}</Link>
          {item?.publisher}
          {item?.date}
        </li>
        )
      } else {
        return (
          <li key={k} className='text-wrap my-2 -indent-10 ml-10'>
            {item?.author}
            <i>{item?.title}</i>
            {item?.sub}
            {item?.publisher}
            {item?.date}
          </li>
        )
      }
    })}
  </>
)

export default Section;
