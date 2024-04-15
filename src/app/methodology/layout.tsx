import GlassPane from "@/components/common/GlassPane"

export default function MethodologyLayout({ children }: { children: React.ReactNode }) {
  return (
    <GlassPane className="container md:w-4/5 mx-auto my-5">
      {children}
    </GlassPane>
  )
}
