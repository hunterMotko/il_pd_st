import BudgetsBar from '@/components/findings/BudgetsBar';
import MultiBar from '@/components/findings/MultiBar';
import PercentageBar from '@/components/findings/PercentageBar';
import PosNegBar from '@/components/findings/PosNegBar';
import {
  getCountyShortFall,
  getRestShortfall,
  getMaxCounty,
  getMinCounty,
  getMaxJudicial,
  getMinJudicial,
  getBudget,
  getHighestPercentage,
  getLowestPercentage
} from '@/lib/analysis'
// import StackedBar from '@/components/findings/StackedBar';

export default async function Findings() {
  const countyShortfall = await getCountyShortFall()
  const restShortfall = await getRestShortfall()
  const maxCounty = await getMaxCounty()
  const minCounty = await getMinCounty()
  const maxJudical = await getMaxJudicial()
  const minJudicial = await getMinJudicial()
  const budget = await getBudget()
  const highestPercentage = await getHighestPercentage()
  const lowestPercentage = await getLowestPercentage()

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-2 my-2 mx-2">
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {countyShortfall && <PosNegBar text={countyShortfall.text} data={countyShortfall.data} />}
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {restShortfall && <MultiBar text={restShortfall.text} data={restShortfall.data} />} 
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {maxCounty && <PosNegBar text={maxCounty.text} data={maxCounty.data} />}
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {minCounty && <PosNegBar text={minCounty.text} data={minCounty.data} />}
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {maxJudical && <PosNegBar text={maxJudical.text} data={maxJudical.data} />}
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {minJudicial && <PosNegBar text={minJudicial.text} data={minJudicial.data} />}
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        {budget && <BudgetsBar text={budget.text} data={budget.data} />}
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PercentageBar text={highestPercentage.text} data={highestPercentage.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PercentageBar text={lowestPercentage.text} data={lowestPercentage.data} />
      </div>
    </div>
  )
}
