export default async function FairActLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <div className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16 text-center">
        <h1 className="w-full text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">
          FAIR Act
        </h1>
        {children}
      </div>
    </div>
  )
}
