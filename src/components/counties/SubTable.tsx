type SubTable = {
  "Defense Attorneys": number[];
  "Investigators": number[];
  "Support Staff": number[];
  "Mental Health Staff": number[];
}
type SubTableProps = {
  data: SubTable | null;
}
function SubStats ({ data }: SubTableProps) {
  const sub = Object.entries(data as SubTable).map(([key, val]) => (
    <tr key={key} className="divide-x text-left">
      <th className="p-1">{key}</th>
      {val.map((item: number, i: number) => (
        <td key={key + val + i} className="text-left p-1">{item.toFixed(2)}</td>
      ))}
    </tr>
  ))
  return (
    <div className="border border-black rounded mb-1 p-2">
      <table className="table w-full text-sm">
        <tbody className="divide-y">
          <tr className="divide-x p-2 mx-2">
            <th className="p-1 text-left">{" "}</th>
            <th className="p-1 text-left">Allocated</th>
            <th className="p-1 text-left">Required</th>
            <th className="p-1 text-left">Shortfall</th>
          </tr>
          {sub}
        </tbody>
      </table>
    </div>
  )
}
 
export default SubStats;
