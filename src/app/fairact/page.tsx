import Link from "next/link";
import endorsers from "@/public/fairact.json"

export default function FairActPage() {
  let first = [], second = []
  let mid = endorsers.length / 2
  for (let i = 0; i < endorsers.length; i++) {
    (i < mid) ? first.push(endorsers[i]) : second.push(endorsers[i])
  }

  return (
    <>
      <div className="grid w-full grid-flow-row gap-x-0 gap-y-1 md:grid-cols-1 md:gap-1 xl:grid-cols-1">
        <h2 className="text-3xl font-bold my-1">Funded Advocacy & Independent Representation (FAIR) Act</h2>
        <h3 className="text-2xl my-1">HB 5842 – Rep. Dave Vella, Rep. Justin Slaughter, Rep. Kevin Olickal, & Rep. Lilian Jiménez</h3>
        <p className="text-lg px-3 mx-3 my-1">
          The <span className="font-bold">FAIR Act</span> will create a constitutional statewide public defense system that will provide oversight, expand resources,
          and establish standards to ensure that every person who cannot afford an attorney is zealously represented by their public defender.
        </p>
      </div>
      <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-8 pb-5 text-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-purple-900 text-2xl font-bold mb-3">Learn More</h3>
          <div className="text-xl">
            FAIR Act
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1lHJj2Ej6ZTatXa3HXQ-X-ctQZ4r5ZXWo/view?usp=sharing"
              className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
            >
              Fact Sheet
            </Link>
          </div>
          <div className="text-xl">
            HB5842
            <Link
              target="_blank"
              href="https://www.ilga.gov/legislation/BillStatus.asp?DocNum=5842&GAID=17&DocTypeID=HB&LegID=154862&SessionID=112&SpecSess=&Session=&GA=103"
              className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
            >
              Status
            </Link>
            and
            <Link
              target="_blank"
              href="https://ilga.gov/legislation/fulltext.asp?DocName=&SessionId=112&GA=103&DocTypeId=HB&DocNum=5842&GAID=17&LegID=154862&SpecSess=&Session="
              className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
            >
              Text
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <h3 className="text-purple-900 text-2xl font-bold mb-3">Press Coverage</h3>
            <div className="text-xl">
              Chicago Sun-Times
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1lHJj2Ej6ZTatXa3HXQ-X-ctQZ4r5ZXWo/view?usp=sharing"
                className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
              >
                Editorial
              </Link>
            </div>
            <div className="text-xl">
              Chicago Tribune
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1lHJj2Ej6ZTatXa3HXQ-X-ctQZ4r5ZXWo/view?usp=sharing"
                className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
              >
                Op-Ed
              </Link>
            </div>
            <div className="text-xl">
              WCIA
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1lHJj2Ej6ZTatXa3HXQ-X-ctQZ4r5ZXWo/view?usp=sharing"
                className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
              >
                TV News Story
              </Link>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="col-span-2 flex flex-col">
          <h3 className="text-purple-900 font-bold text-2xl mb-3">
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScmUp8MMKcshcN2KAhXqSq9kBHXLShvYIsVsb4vTbNpizhytA/viewform"
              className="text-2xl text-purple-900 hover:text-purple-700 hover:underline"
            >
              FAIR Act Endorsers
            </Link>
          </h3>
          <div className="md:flex justify-around">
            <div>
              {first.map(item => <div key={item}>{item}</div>)}
            </div>
            <div>
              {second.map(item => <div key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
