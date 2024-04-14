import CardGroup from "@/components/home/CardGroup";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-900 from-30% via-white to-purple-900 h-screen p-5">
      <div className="h-1/3 text-center my-3 py-3">
        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
          Illinois Public Defender Statistics
        </h2>
      </div>
      <CardGroup />
    </div>
  );
}
