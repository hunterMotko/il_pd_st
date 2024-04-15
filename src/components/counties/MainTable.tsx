import { TableKeys } from '@/types';

type Stats = {
  [TableKeys.County]: string;
  [TableKeys.Circuit]: number | string;
  [TableKeys.District]: number | string;
  [TableKeys.Population]: string;
  [TableKeys.PDFY23Budget]: string;
  [TableKeys.SAFY23Budget]: string;
  [TableKeys.AnnualCriminalFilings]: string;
  [TableKeys.AnnualJuvenileFilings]: string;
}
type StatsProps = {
  data: Stats | null;
}
const MainTable = ({ data }: StatsProps) => {
  const statsTable = Object.entries(data as Stats).map(([key, val]) => (
    <tr
      key={key}
      className="divide-x text-left"
    >
      <th className="p-2 mx-2">{key}</th>
      <td className="p-2 mx-2">{val}</td>
    </tr>
  ));

  return (
    <div className="border border-black rounded mb-1 p-1">
      <table className="w-full table-auto">
        <tbody className="divide-y">
          {statsTable}
        </tbody>
      </table>
    </div>
  )
}

export default MainTable;
