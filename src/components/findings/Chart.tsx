import MultiBar from '@/components/findings/MultiBar'
import PosNegBar from '@/components/findings/PosNegBar'
import BudgetsBar from '@/components/findings/BudgetsBar'
import PercentageBar from '@/components/findings/PercentageBar'
import StackedBar from '@/components/findings/StackedBar'

const renderChart = (type: string, text: string, data: any) => {
  if (type === 'multi-bar') {
    return (
      <MultiBar text={text} data={data} />
    )
  } else if (type === 'bar') {
    return (
      <PosNegBar text={text} data={data} />
    )
  } else if (type === 'budget') {
    return (
      <BudgetsBar text={text} data={data} />
    )
  } else if (type === 'percent-bar') {
    return (
      <PercentageBar text={text} data={data} />
    )
  } else if (type === 'budget-stacked') {
    return (
      <StackedBar text={text} data={data} />
    )
  } 
}

const Chart = async ({ type, text, data }: ChartData) => {
  return (
    <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
      {data && renderChart(type, text, data)}
    </div>
  )
}

export default Chart
