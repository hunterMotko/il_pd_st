import path from 'path'
import { promises as fs } from "fs"
import GlassPane from '@/components/common/GlassPane'
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
        <div key={key} className='border rounded my-1 p-3'>
          <h1 className='my-1 text-xl font-bold'>{key}</h1>
          <ul className='p-1'>
            <Section source={source} />
          </ul>
        </div>
      )

      sections.push(section)
    }
  }

  return (
    <GlassPane className="container mx-auto w-3/4 md:w-2/3 my-6 p-4">
      <h1 className='text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl'>Sources</h1>
      {sections}
    </GlassPane>
  )
}
