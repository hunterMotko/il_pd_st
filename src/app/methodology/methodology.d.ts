interface ListSection {
  title?: string,
  description?: string,
  list?: ListItem[]
}

interface ListItem {
  title?: string,
  description?: string,
}

interface MainSection {
  title?: string,
  description?: (string | { href: string, text: string })[],
  list?: string[],
  paragraph?: string
}
type Staffing = {
  title: string,
  list: string[][] | string[]
}
interface Section {
  title?: string,
  description?: string,
  list?: string[]
}

interface Value {
  description: string,
  list: ListItem[]
}
