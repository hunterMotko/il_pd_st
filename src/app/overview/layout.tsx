import GlassPane from "@/components/common/GlassPane"

function OverviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <GlassPane className="container md:w-4/5 mx-auto my-5">
      {children}
    </GlassPane>
  )
}

export default OverviewLayout
