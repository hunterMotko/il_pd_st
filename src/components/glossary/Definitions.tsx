import DefCard from "@/components/glossary/DefCard";

interface GlossaryItem {
  term: string;
  definition: (string | {text: string, href: string})[];
}

const Dictionary = ({ glossary }: { glossary: GlossaryItem[] }): JSX.Element => (
  <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
    <div className="mt-14 max-w-2xl mx-auto">
      {glossary.map((item, i) => (
        <DefCard
          key={i + item.term}
          i={i}
          term={item.term}
          definition={item.definition}
        />
      ))}
    </div>
  </section>
)

export default Dictionary
