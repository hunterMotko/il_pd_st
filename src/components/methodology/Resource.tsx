const Resource = ({ title, description, list }: Section) => (
  <section className="h-full w-full p-4" >
    <h2 className='text-2xl my-2'>{title}:</h2>
    <p>{description}</p>
    <ul className='list-disc mx-4 my-2 px-4'>
      {!!list && list.map((item, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </section>
)

export default Resource;
