type SetState<T> = React.Dispatch<React.SetStateAction<T>>
interface LegendData {
  [key: string]: number
}
// HEADER
interface NavItem {
  title: string;
  path: string;
  sub?: undefined;
}
interface SubItem {
  title: string;
  sub: {
    title: string;
    path: string;
  }[];
  path?: undefined;
}
interface DropState {
  isActive: boolean, i: null | number
}
// HEADER
interface ChartItemData {
  name: string;
  value: number;
}

interface MultiBarData {
  name: string;
  existing: number;
  shortfall: number;
}

interface Question {
  type: string,
  text: string,
  data: ChartsData[] | MultiBarData
}

interface ChartData {
  type: string,
  text: string
  data: ChartsData[] | MultiBarData | null
}

type ChartsData = {
  [key: string]: ChartData
}

interface LegendQuery {
  name: string;
  shortfall: number;
}

interface Legend {
  [key: string]: number;
}

interface Source {
  author?: string;
  title?: string;
  url?: string;
  sub?: string;
  publisher?: string;
  date?: string;
}

