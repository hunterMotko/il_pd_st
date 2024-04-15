import { TableKeys } from "@/types";

interface CircuitData {
  [TableKeys.Circuit]: number | string;
  [TableKeys.Population]: string;
  [TableKeys.PDFY23Budget]: string;
  [TableKeys.SAFY23Budget]: string;
  [TableKeys.AnnualCriminalFilings]: string;
  [TableKeys.AnnualJuvenileFilings]: string;
};

function MainTable ({ data }: { data: CircuitData }) {
  const statsTable = Object.entries(data).map(([key, val]) => (
    <tr key={key} className="divide-x text-left" >
      <th className="p-2 mx-2">{key}</th>
      <td className="p-2 mx-2">{val}</td>
    </tr>
  ))

  return (
    <div className="border border-black rounded mb-3">
      <table className="w-full table-auto">
        <tbody className="divide-y">
          {statsTable}
        </tbody>
      </table>
    </div>
  )
}

export default MainTable
