import Link from "next/link";

interface NewsArticle {
	title: string;
	outlet: string;
	link: string;
	date: string;
}

type SortedNewsArticles = NewsArticle[]

export default function InTheNewsSection({ sortedNews }: { sortedNews: SortedNewsArticles }) {
	return (
		<section className="max-w-screen-2xl m-auto w-full pb-5">
			<h3 className="text-purple-900 text-2xl font-bold mb-4">In The News</h3>
			<ul className="text-xl w-full">
				<li className="mb-3 text-balance">
					{'Public Defenseless: Is Illinois Taking the First Step To Establish State Wide Public Defense? Available on '}
					< Link
						target="_blank"
						href={'https://podcasts.apple.com/us/podcast/362-is-illinois-taking-the-first-step-to-establish/id1600528975?i=1000711478073'}
						className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
					>
						Apple Podcasts
					</Link>
					and
					< Link
						target="_blank"
						href={'https://open.spotify.com/episode/3x32bzSUFhOwLKWjK2lKOG'}
						className="mx-1 text-blue-500 hover:text-purple-900 hover:underline"
					>
						Spotify
					</Link>
				</li>
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
	)
}
