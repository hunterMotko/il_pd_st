import Link from "next/link";
import json from "@/public/fairact.json"

export default function FairActPage() {
  const { news, endorsers } = json
  let sortedNews = news.sort((a,b) => +new Date(b.date) - +new Date(a.date))
  let first = [], second = []
  let mid = endorsers.length / 2
  for (let i = 0; i < endorsers.length; i++) {
    (i < mid) ? first.push(endorsers[i]) : second.push(endorsers[i])
  }
  return (
    <>
      <div className="grid w-full grid-flow-row gap-x-0 gap-y-1 md:grid-cols-1 md:gap-1 xl:grid-cols-1">
        <h2 className="text-3xl font-bold my-1">Funded Advocacy & Independent Representation (FAIR) Act</h2>
        <h3 className="text-2xl my-1">
          HB 3363: Senators Robert Peters & Bill Cunningham
        </h3>
        <h3 className="text-2xl my-1">
          Representatives Dave Vella, Justin Slaughter, Lisa Davis, and Kevin Olickal 
        </h3>
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
              href="https://drive.google.com/file/d/1oIyaCqEfvgIACtJMHGoWNYEAdVrYQv6o/view"
              className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
            >
              Fact Sheet
            </Link>
          </div>
          <div className="text-xl">
            HB3363
            <Link
              target="_blank"
              href="https://www.ilga.gov/legislation/billstatus.asp?DocNum=3363&GAID=18&GA=104&DocTypeID=HB&LegID=161896&SessionID=114"
              className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
            >
              Status
            </Link>
            and
            <Link
              target="_blank"
              href="https://www.ilga.gov/legislation/fulltext.asp?DocName=&SessionId=114&GA=104&DocTypeId=HB&DocNum=3363&GAID=18&LegID=161896&SpecSess=&Session="
              className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
            >
              Text
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl m-auto w-full pb-5">
        <h3 className="text-purple-900 text-2xl font-bold mb-4">In The News</h3>
        <ul className="text-xl w-full">
          {
            sortedNews.map(story => (
              <li key={story.title} className="mb-3 text-balance">
                {story.outlet}:
                < Link
                  target="_blank"
                  href={story.link}
                  className="col-span-3 mx-1 text-blue-500 hover:text-purple-900 hover:underline"
                >
                  {story.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
      <section className="mx-auto">
        <div className="flex flex-col align-center justify-center">
          <h3 className="text-purple-900 font-bold text-2xl mb-3">
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScmUp8MMKcshcN2KAhXqSq9kBHXLShvYIsVsb4vTbNpizhytA/viewform"
              className="text-2xl text-purple-900 hover:text-purple-700 hover:underline"
            >
              FAIR Act Endorsers
            </Link>
          </h3>
          <div className="md:flex justify-center align-center">
            <div className="md:w-1/2 text-wrap">
              {first.map(item => <div key={item}>{item}</div>)}
            </div>
            <div className="md:w-1/2 text-wrap">
              {second.map(item => <div key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
