const CasesFiled = ({ title, description }: ListItem) => (
  <section className="h-full w-full p-4" >
    <h2 className='text-2xl my-2'>{title}:</h2>
    <p>{description}</p>
  </section>
)

export default CasesFiled;
