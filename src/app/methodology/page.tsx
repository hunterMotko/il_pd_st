import json from '../../../public/methodology.json'
import Resource from '@/components/methodology/Resource'
import Defense from '@/components/methodology/Defense'
import Workload from '@/components/methodology/Workload'
import CasesFiled from '@/components/methodology/CasesFiled'
import StaffingCalculations from '@/components/methodology/StaffingCalc'
import ResearchQuestion from '@/components/methodology/ResearchQuestion'

export default async function MethodologyPage() {
  const content = Object.entries(json).map(([key, value]) => {
    if (key === 'Research Question') {
      const { description, paragraph } = value as ResearchQuest
      return <ResearchQuestion
        key={key}
        title={key}
        description={description}
        paragraph={paragraph}
      />
    } else if (key === 'Resource Allocation') {
      const { description, list } = value as Section
      return <Resource
        key={key}
        title={key}
        description={description}
        list={list}
      />
    } else if (key === 'Defense Staffing') {
      const { description, list } = value as Section
      return <Defense
        key={key}
        title={key}
        description={description}
        list={list}
      />
    } else if (key === 'Defense Attorney Workload Standards') {
      return <Workload
        key={key}
        title={key}
        section={value}
      />
    } else if (key === 'Criminal and Juvenile Cases Filed') {
      const { description } = value as ListItem
      return <CasesFiled
        key={key}
        title={key}
        description={description}
      />
    } else if (key === 'Staffing Calculations') {
      let list = value as string[][] | string[]
      return <StaffingCalculations
        key={key}
        title={key}
        list={list}
      />
    }
  })
  return (
    <>
      {content}
    </>
  )
}

