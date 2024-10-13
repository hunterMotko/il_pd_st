import path from 'path'
import { promises as fs } from "fs"
import Section from '@/components/sources/Section'

const getContent = async () => {
  try {
    const p = path.join(process.cwd(), 'public', 'sources.json')
    const json = await fs.readFile(p, 'utf8')
    const result = JSON.parse(json)
    return result;
  } catch (e) {
    console.error('M ERROR:', e)
  }
}

export default async function Page() {
  const json = await getContent();
  const sections = []

  if (!!json) {
    for (let key in json) {
      const source = json[key] as Source[]
      const section = (
        <div key={key} className=''>
          <h1 className='my-1 text-2xl font-bold'>{key}</h1>
          <ul className='p-1'>
            <Section source={source} />
          </ul>
        </div>
      )

      sections.push(section)
    }
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-8 py-12 2xl:py-16">
        <h1 className='w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl'>Sources</h1>
        {sections}
      </div>
    </div>
  )
}
