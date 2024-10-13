import DefCard from "@/components/glossary/DefCard";

interface GlossaryItem {
  term: string;
  definition: (string | { text: string, href: string })[];
}

const Dictionary = ({ glossary }: { glossary: GlossaryItem[] }): JSX.Element => (
  <section className="w-full">
    {glossary.map((item, i) => (
      <DefCard
        key={i + item.term}
        i={i}
        term={item.term}
        definition={item.definition}
      />
    ))}
  </section>
)

export default Dictionary
