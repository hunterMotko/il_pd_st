import BudgetsBar from '@/components/findings/BudgetsBar';
import MultiBar from '@/components/findings/MultiBar';
import PercentageBar from '@/components/findings/PercentageBar';
import PosNegBar from '@/components/findings/PosNegBar';

const data = {
  "countyShortfall": {
    "type": "bar",
    "text": "Defense Attorneys",
    "data": [
      { "name": "Allocated", "value": 1072 },
      { "name": "Required", "value": 1926.99 },
      { "name": "Shortfall", "value": 854.5501 }
    ]
  },
  "restShortfall": {
    "type": "multi-bar",
    "text": "Investigators, Mental Health, and Support Staff",
    "data": {
      "Investigators": { "allocated": 97.5, "required": 642.34, "shortfall": 544.6 },
      "Mental Health": { "allocated": 26, "required": 642.34, "shortfall": 616.1 },
      "Support": { "allocated": 282.5, "required": 963.48, "shortfall": 681.2 }
    }
  },
  "maxCounty": {
    "type": "bar",
    "text": "Five Counties with the Largest Attorney Shortfall",
    "data": [
      { "name": "Cook", "value": 149.9 },
      { "name": "DuPage", "value": 72 },
      { "name": "Madison", "value": 51.8 },
      { "name": "St Clair", "value": 42.2 },
      { "name": "Lake", "value": 32.5 }
    ]
  },
  "minCounty": {
    "type": "bar",
    "text": "Five Counties with Smallest Attorney Shortfall",
    "data": [
      { "name": "Edwards", "value": -0.3 },
      { "name": "Putnam", "value": -0.1 },
      { "name": "Brown", "value": 0.214 },
      { "name": "Scott", "value": 0.2165 },
      { "name": "Schuyler", "value": 0.2196 }
    ]
  },
  "maxJudicial": {
    "type": "bar",
    "text": "Five Judicial Circuits with Largest Attorney Shortfall",
    "data": [
      { "name": "25", "value": 149.9 },
      { "name": "18", "value": 72 },
      { "name": "3", "value": 51.8 },
      { "name": "20", "value": 42.2 },
      { "name": "19", "value": 32.5 }
    ]
  },
  "minJudicial": {
    "type": "bar",
    "text": "Five Judical Circuits with Smallest Attorney Shortfall",
    "data": [
      { "name": "2", "value": -0.3 },
      { "name": "10", "value": -0.1 },
      { "name": "8", "value": 0.214 },
      { "name": "7", "value": 0.2165 },
      { "name": "8", "value": 0.2196 }
    ]
  },
  "budget": {
    "type": "budget",
    "text": "Total Budget Allocation for Prosecution v. Defense Statewide",
    "data": [
      { "name": "Prosecution", "value": 276576325.72 },
      { "name": "Defense", "value": 144441696.38 }
    ]
  },
  "attorneysRequired": {
    "type": "budget",
    "text": "Cost of Total Attorneys Required",
    "data": [
      { "name": "State Total", "value": 92179713.03 },
      { "name": "Counties with Population Over 35,000", "value": 42474823.21 },
      { "name": "Cook County", "value": 24872197.5 },
      { "name": "Counties with Population Under 35,000", "value": 24832692.32 }
    ]
  },
  "staffRequired": {
    "type": "budget-stacked",
    "text": "Cost of Total Support Staff Required",
    "data": {
      "State Total": { "Other Support Staff": 64601787, "MH Staff": 43068081, "Investigators": 43068081 },
      "Counties with Population Over 35,0000": { "Other Support Staff": 33322498, "MH Staff": 22214999, "Investigators": 22214999 },
      "Cook County": { "Other Support Staff": 24637523, "MH Staff": 16425239, "Investigators": 16425239 },
      "Counties with Population Under 35,000": { "Other Support Staff": 6641766, "MH Staff": 4427844, "Investigators": 4427844 }
    }
  },
  "stateBudget": {
    "type": "budget",
    "text": "Full State Public Defender Budget",
    "data": [
      { "name": "State Total", "value": 606152749 },
      { "name": "Counties with Population Over 35,000", "value": 307588718 },
      { "name": "Cook County", "value": 220889428 },
      { "name": "Counties with Population Under 35,000", "value": 77674604 }
    ]
  },
  "coveringShortfall": {
    "type": "budget",
    "text": "Cost of Covering Shortfall",
    "data": [
      { "name": "State Total", "value": 436202112 },
      { "name": "Counties with Population Over 35,000", "value": 243732073 },
      { "name": "Cook County", "value": 129399252 },
      { "name": "Counties with Population Under 35,000", "value": 63070787 }
    ]
  },
  "highestPercentage": {
    "type": "percent-bar",
    "text": "5 Counties with the Highest Attorney Shortfall Percentage",
    "data": [
      { "name": "Pulaski", "value": 1486 },
      { "name": "Pike", "value": 745 },
      { "name": "Fulton", "value": 521 },
      { "name": "Randolph", "value": 494 },
      { "name": "Clinton", "value": 491 }
    ]
  },
  "lowestPercentage": {
    "type": "percent-bar",
    "text": "5 Counties with Lowest Attorney Shortfall Percentage",
    "data": [
      { "name": "Edwards", "value": -35 },
      { "name": "Putnam", "value": -18 },
      { "name": "Schuyler", "value": 22 },
      { "name": "McDonough", "value": 25 },
      { "name": "Cook", "value": 26 }
    ]
  }
}

export default async function Findings() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-2 my-2 mx-2">
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PosNegBar text={data.countyShortfall.text} data={data.countyShortfall.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <MultiBar text={data.restShortfall.text} data={data.restShortfall.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PosNegBar text={data.maxCounty.text} data={data.maxCounty.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PosNegBar text={data.minCounty.text} data={data.minCounty.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PosNegBar text={data.maxJudicial.text} data={data.maxJudicial.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PosNegBar text={data.minJudicial.text} data={data.minJudicial.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <BudgetsBar text={data.budget.text} data={data.budget.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PercentageBar text={data.highestPercentage.text} data={data.highestPercentage.data} />
      </div>
      <div className="bg-white border border-black shadow-lg rounded w-full h-full p-2 mx-auto overflow-x-auto" >
        <PercentageBar text={data.lowestPercentage.text} data={data.lowestPercentage.data} />
      </div>
    </div>
  )
}
