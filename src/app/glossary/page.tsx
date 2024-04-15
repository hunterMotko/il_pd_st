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

  return glossary && <Definitions glossary={glossary} /> 
}
