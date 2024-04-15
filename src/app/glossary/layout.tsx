import GlassPane from "@/components/common/GlassPane";

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <GlassPane className="w-fit mx-auto my-5 p-5">
          <h1 className="text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
            Glossary
          </h1>
        {children}
      </GlassPane>
    </div>
  )
}
