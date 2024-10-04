import Link from 'next/link'

type CardProps = {
  title: string
  path: string
}
const Card = ({ path, title }: CardProps) => (
  <Link href={path}
    className={`
      ${title === "FAIR Act" ? "col-span-2" : ""}
      h-20 w-full md:4/5 my-auto shadow-lg 
      bg-purple-900 text-white 
      hover:bg-white hover:text-purple-900 hover:shadow-sm hover:border-2 hover:border-purple-900
      border rounded-md duration-300 
      flex justify-center items-center text-center
    `}
  >
    <h5 className="text-2xl font-bold md:text-3xl">{title}</h5>
  </Link>
)

export default Card
