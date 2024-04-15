import { TableKeys } from "@/types";

interface SubTableData {
    [TableKeys.DefenseAttorneys]: number[];
    [TableKeys.Investigators]: number[];
    [TableKeys.SupportStaff]: number[];
    [TableKeys.MentalHealthStaff]: number[];
};

const SubTable = ({data}: { data: SubTableData }) => {
  const sub = Object.entries(data).map(([key, val]) => (
    <tr key={key} className="divide-x text-left">
      <th className="p-1">{key}</th>
      {val.map((item: number, i: number) => (
        <td key={key + val + i} className="p-1">{item.toFixed(2)}</td>
      ))}
    </tr>
  ))

  return (
    <div className="border border-black rounded mb-3 p-2">
      <table className="w-full table-auto text-sm">
        <tbody className="divide-y">
          <tr className="divide-x p-3 mx-2">
            <th className="p-1">{" "}</th>
            <th className="p-1">Allocated</th>
            <th className="p-1">Required</th>
            <th className="p-1">Shortfall</th>
          </tr>
          {sub}
        </tbody>
      </table>
    </div>
  )
}

export default SubTable
