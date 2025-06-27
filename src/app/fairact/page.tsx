import json from "@/public/fairact.json"
import LearnMoreSection from "@/components/fairact/LearnMoreSection";
import InTheNewsSection from "@/components/fairact/InTheNewsSection";
import EndorsersSection from "@/components/fairact/EndorsersSection";

export default function FairActPage() {
	const { news, endorsers } = json
	let sortedNews = news.sort((a, b) => +new Date(b.date) - +new Date(a.date))
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
			<LearnMoreSection />
			<InTheNewsSection sortedNews={sortedNews} />
			<EndorsersSection first={first} second={second} />
		</>
	)
}
