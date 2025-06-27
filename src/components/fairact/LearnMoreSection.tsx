import Link from "next/link";

export default function LearnMoreSection() {
	return (
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
	)
}

