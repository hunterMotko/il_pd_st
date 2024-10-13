import Link from "next/link";

const Workload = ({ title, section }: { title: string, section: any }) => (
  <section className="h-full w-full" >
    <h2 className='text-2xl my-2'>{title}:</h2>
    <p>
      {section.paragraph.map((item: string | { href: string, text: string }, i: number) => (
        (typeof item === 'string') ?
          (<span key={i}>{item}</span>) :
          (<Link key={i} className='text-blue-500 hover:underline' href={item.href}>{item.text}</Link>)
      ))}
    </p>
    <ul className='list-disc mx-4 my-2 px-4'>
      {section.mainList.map((item: string | string[], i: number) => (
        <li key={i} className=''>
          {item}
        </li>
      ))}
    </ul>
    <p>
      {section.secondParagraph.map((item: string | { href: string, text: string }, i: number) => (
        (typeof item === 'string') ?
          (<span key={i}>{item}</span>) :
          (<Link key={i} className='text-blue-500 hover:underline' href={item.href}>{item.text}</Link>)
      ))}
    </p>
    <ul className='list-disc mx-4 my-2 px-4'>
      {section.list.map((item: string | string[], i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <ul className="mx-2 my-2 px-2 border rounded border-black">
      {section.formulas.map((item: string[]) => {
        const [sum, equals, num, operation, dem] = item
        return (
          <li key={sum} className="grid grid-cols-5 my-4 p-2">
            <div className="justify-self-start col-span-2">
              <i>
                {sum}
              </i>
            </div>
            <div className="justify-self-center">
              <i>
                {equals}
              </i>
            </div>
            {operation === " / " ?
              <div className="text-center justify-self-end col-span-2">
                <p className="border-b border-black"><i>{num}</i></p>
                <p><i>{dem}</i></p>
              </div>
              :
              <div className="justify-self-end col-span-2">
                <i>
                  {num} {operation} {dem}
                </i>
              </div>
            }
          </li>
        )
      })}
      <li className="m-1">
        <sub>
          {section.formulaSub}
        </sub>
      </li>
    </ul>
    <p>{section.subParagraph}</p>
    <ul className='list-disc mx-4 my-2 px-4'>
      {section.subList.map((item: string | string[], i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <p>
      {section.tableParagraph.map((item: string | { href: string, text: string }, i: number) => (
        (typeof item === 'string') ?
          (<span key={i}>{item}</span>) :
          (<Link key={i} className='text-blue-500 hover:underline' href={item.href}>{item.text}</Link>)
      ))}
    </p>
    <table className="table-auto my-3">
      <thead>
        <tr className='border divide-x'>
          {section.table.headers.map((item: string, i: number) => (
            <th key={i} className='p-1'>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {section.table.body.map((item: Array<string | number>, i: number) => (
          <tr key={i} className='p-2 border divide-x'>
            {item.map((subItem, k) => k === 0 ? (
              <td key={k} className='p-1'>{subItem}</td>
            ) : (
              <td key={k} className='p-1 text-center'>{subItem}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      {section.endParagraph.map((item: string | { href: string, text: string }, i: number) => (
        (typeof item === 'string') ?
          (<p key={i} className="pt-3">{item}</p>) :
          (<Link key={i} className='text-blue-500 italic hover:underline mb-3 pb-3' href={item.href}>{item.text}</Link>)
      ))}
    </div>
  </section >
)

export default Workload;
