const StaffingCalculations = ({ title, list }: Staffing) => (
  <section className="h-full w-full" >
    <h2 className='text-2xl my-2'>{title}:</h2>
    <ul className="mx-2 my-2 px-2 border rounded border-black">
      {!!list && list.map((s: string[] | string, i: number) => {
        if (Array.isArray(s)) {
          if (s.length > 5) {
            const [sum, equals, num, operation, dem, op, last] = s
            return (
              <li key={sum} className="grid grid-cols-12 my-4 p-2">
                <div className="justify-self-start col-span-4">
                  <i>
                    {sum}
                  </i>
                </div>
                <div className="justify-self-center">
                  <i>
                    {equals}
                  </i>
                </div>
                <div className="justify-self-end text-center col-span-3">
                  <p className="border-b border-black"><i>{num}</i></p>
                  <p><i>{dem}</i></p>
                </div>
                <div className="justify-self-center">
                  <i>{op}</i>
                </div>
                <div className="justify-self-start col-span-3">
                  <i>{last}</i>
                </div>
              </li>
            )
          } else if (s.length === 5) {
            const [sum, equals, num, operation, dem] = s
            return (
              <li key={sum} className="grid grid-cols-12 my-4 p-2">
                <div className="justify-self-start col-span-4">
                  <i>
                    {sum}
                  </i>
                </div>
                <div className="justify-self-center">
                  <i>
                    {equals}
                  </i>
                </div>
                {operation === " / " ?
                  <div className="text-center justify-self-end col-span-7">
                    <p className="border-b border-black"><i>{num}</i></p>
                    <p><i>{dem}</i></p>
                  </div>
                  :
                  <div className="justify-self-end col-span-7">
                    <i>
                      {num}{operation}{dem}
                    </i>
                  </div>
                }
              </li>
            )
          }
        } else {
          return (
            <li key={i} className=''>
              <sub>
                {s}
              </sub>
            </li>
          )
        }
      })}
    </ul>
  </section>
)

export default StaffingCalculations
