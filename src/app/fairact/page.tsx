import PdfSection from "@/components/fairact/PdfSection";
import Link from "next/link";

export default function FairActPage() {
  return (
    <div className="container mx-auto">
      <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16 text-center">
        <h1 className="w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
          FAIR Act
        </h1>
        <div className="grid w-full grid-flow-row gap-x-0 gap-y-1 md:grid-cols-1 md:gap-1 xl:grid-cols-1">
          <h2 className="text-3xl font-bold my-1">Funded Advocacy & Independent Representation</h2>
          <h3 className="text-2xl my-1">HB 5842 – Rep. Dave Vella, Rep. Justin Slaughter, & Rep. Kevin Olickal</h3>
          <p className="text-lg px-3 mx-3 my-1">
            The FAIR Act will create a statewide public defense system to
            ensure that all Illinois residents have access to quality legal representation, regardless of their socioeconomic status.
          </p>
        </div>
      </section>
      <section className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-5 text-center">
        <div>
          <h2 className="text-xl text-purple-900">Learn More</h2>
          <Link
            href="https://drive.google.com/file/d/1f3JyOyJDRhlH9E-5Ncv6amuRjvy843p6/view"
            className="pl-5 hover:text-purple-900 hover:underline"
          >
            FAIR Act Fact Sheet & Endorsers
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-purple-900 text-xl">Legislative Updates</h3>
          <Link
            href="https://www.ilga.gov/legislation/BillStatus.asp?DocNum=5842&GAID=17&DocTypeID=HB&LegID=154862&SessionID=112&SpecSess=&Session=&GA=103"
            className="pl-5 hover:text-purple-900 hover:underline"
          >
            Bill Status of HB5842
          </Link>
          <Link
            className="pl-5 hover:text-purple-900 hover:underline"
            href="https://ilga.gov/legislation/fulltext.asp?DocName=&SessionId=112&GA=103&DocTypeId=HB&DocNum=5842&GAID=17&LegID=154862&SpecSess=&Session="
          >
            Full Text of HB5842
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-purple-900 text-xl">Support the FAIR Act</h3>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScmUp8MMKcshcN2KAhXqSq9kBHXLShvYIsVsb4vTbNpizhytA/viewform"
            className="pl-5 hover:text-purple-900 hover:underline"
          >
            Join the FAIR Act Support Network!
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRMxE7T5m_m42PqSqf6aINqzYpabwWpW5kZbOiHPo-OMZy7A/viewform"
            className="pl-5 hover:text-purple-900 hover:underline"
          >
            Canvass in Support of Public Defense
          </Link>
        </div>
      </section>
    </div >
  )
}
