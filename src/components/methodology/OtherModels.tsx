const OtherStateModels = ({ list }: { list: ListItem[] }) => (
  <section className="h-full w-full p-4" >
    {list.map(({ title, description }, i) => (
      <div key={i}>
        <h2 className='text-2xl my-2'>{title}</h2>
        <p>{description}</p>
      </div>
    ))}
  </section>
)

export default OtherStateModels;
