import Definitions from "@/components/glossary/Definitions";
import fs from "fs/promises";
import path from "path";

const getGlossary = async () => {
  try {
    const result = path.join(process.cwd(), "/public/glossary.json");
    const json = await fs.readFile(result, "utf8");
    return JSON.parse(json);
  } catch (error) {
    console.error(error);
  }
}

export default async function Glossary() {
  const glossary = await getGlossary();

  return glossary && (
    <div className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-8 py-12 2xl:py-16">
      <h1 className="w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
        Glossary
      </h1>
      <Definitions glossary={glossary} />
    </div>
  )
}
