function ColorLegend ({ legend }: { legend: string[][] }) {
  const bgFillColors = [
    "bg-indigo-300",
    "bg-indigo-400",
    "bg-indigo-500",
    "bg-indigo-600",
    "bg-indigo-700",
  ];
  return (
    <div className="bg-white p-1 rounded w-full mx-auto shadow-md border border-black text-center">
      <h2 className="text-lg font-semibold mb-2">Defense Attorney Shortfall</h2>
      <div className="w-full flex justify-between items-center mx-auto" >
        {bgFillColors.map((color, index) => (
          <div className="w-full flex flex-col justify-between items-center mx-auto" key={index}>
            <div className={`w-12 h-6 rounded-lg my-1 ${color}`} ></div>
            <span className="justify-self-end">
              {index === 0 ? `${legend[index][0]} ${legend[index][1]}` : `${legend[index][0]} - ${legend[index][1]}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ColorLegend;
