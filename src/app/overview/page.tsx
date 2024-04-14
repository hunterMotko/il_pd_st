import json from '../../../public/overview.json'
import Main from '@/components/overview/Main'

interface MainSection {
  title?: string,
  description?: (string | { href: string, text: string })[],
  list?: string[],
  paragraph?: string
}

function Page() {
  const { description, list, paragraph } = json as MainSection

  return <Main
    title={"Issue Overview"}
    description={description}
    list={list}
    paragraph={paragraph}
  />
}

export default Page
