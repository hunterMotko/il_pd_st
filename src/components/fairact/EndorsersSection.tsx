import Link from "next/link"

export default function EndorsersSection({ first, second }: { first: string[], second: string[] }) {
	return (
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
	)
}
