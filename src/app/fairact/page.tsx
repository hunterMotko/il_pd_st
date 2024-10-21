import Link from "next/link";
import endorsers from "@/public/fairact.json"

export default function FairActPage() {
  let first= [], second = []
  let mid = endorsers.length/2
  for (let i = 0; i < endorsers.length; i++) {
    (i < mid) ? first.push(endorsers[i]) : second.push(endorsers[i])
  }

  return (
    <>
      <div className="grid w-full grid-flow-row gap-x-0 gap-y-1 md:grid-cols-1 md:gap-1 xl:grid-cols-1">
        <h2 className="text-3xl font-bold my-1">Funded Advocacy & Independent Representation (FAIR) Act</h2>
        <h3 className="text-2xl my-1">HB 5842 – Rep. Dave Vella, Rep. Justin Slaughter, Rep. Kevin Olickal, & Rep. Lilian Jiménez</h3>
        <p className="text-lg px-3 mx-3 my-1">
          The FAIR Act will create a statewide public defense system to
          ensure that all Illinois residents have access to quality legal representation, regardless of their socioeconomic status.
        </p>
      </div>
      <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 pb-5 text-center">
        <div>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScmUp8MMKcshcN2KAhXqSq9kBHXLShvYIsVsb4vTbNpizhytA/viewform"
            className="text-2xl text-blue-500 hover:text-purple-900 hover:underline"
          >
            Endorse the FAIR Act
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-purple-900 text-2xl mb-3">FAIR Act Endorsers</h3>
          <div className="md:flex justify-around">
            <div> 
              {first.map(item => <div>{item}</div>)}
            </div>
            <div>
              {second.map(item => <div>{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
