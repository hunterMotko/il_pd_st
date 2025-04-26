import CardGroup from "@/components/home/CardGroup";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-purple-900 from-30% via-white to-purple-900 py-5">
      <div className="text-center my-10 py-5">
        <h2 className="text-5xl text-white font-extrabold mx-auto">
          Illinois Public Defender Statistics
        </h2>
      </div>
      <CardGroup />
    </div>
  );
}
