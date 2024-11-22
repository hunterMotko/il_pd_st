import { navigation } from '@/utils/nav';
import Card from '@/components/home/Card';
import DropCard from '@/components/home/DropCard';

const CardGroup = () => {
  return (
    <section className="h-2/3 grid md:grid-cols-2 gap-2 sm:gap-5 place-items-center m-1 sm:m-5">
      {navigation.map((info, index) => {
        if (info.hasOwnProperty('sub')) {
          return (
            <DropCard
              key={index}
              title={info.title}
              sub={info.sub as { title: string, path: string }[]}
            />
          )
        } else {
          return <Card key={index} title={info.title} path={info.path as string} />
        }
      })}
    </section>
  )
}

export default CardGroup
