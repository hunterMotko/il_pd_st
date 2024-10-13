const ResearchQuestion = ({ title, description, paragraph }: ResearchQuest) => (
  <section className="h-full w-full" >
    <h2 className='text-2xl my-2'>{title}:</h2>
    <p className="my-2">{description}</p>
    <p className="my-2">{paragraph}</p>
  </section>
)

export default ResearchQuestion;
