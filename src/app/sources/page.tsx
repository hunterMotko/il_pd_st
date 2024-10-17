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

  return (<> {sections} </>)
}
