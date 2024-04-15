export default async function DataFindingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full container mx-auto">
      <h1 className="my-5 mx-6 text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
        Key Data Findings
      </h1>
      {children}
    </div>
  )
}
