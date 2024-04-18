import BudgetsBar from '@/components/findings/BudgetsBar';
import MultiBar from '@/components/findings/MultiBar';
import PercentageBar from '@/components/findings/PercentageBar';
import PosNegBar from '@/components/findings/PosNegBar';
import { query } from '@/lib/db';

async function getCountyShortFall() {
  // type bar
  const q = `
SELECT ARRAY[
json_build_object('name', 'Allocated', 'value', SUM(a.total)),
json_build_object('name', 'Required', 'value', SUM(r.attorney)),
json_build_object('name', 'Shortfall', 'value', SUM(s.attorney))
] AS data
FROM allocations a 
LEFT JOIN required r ON a.county_id = r.county_id
LEFT JOIN shortfalls s ON a.county_id = s.county_id
  `
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Defense Attorneys",
      data: result.rows[0].data
    }
  } catch (error) {
    console.error("COUNTY SHORTFALL ERROR: ", error)
    return false
  }
}
async function getRestShortfall() {
  // type: "multi-bar"
  const q = `
      SELECT json_build_object(
          'Investigators', json_build_object(
            'allocated', SUM(a.investigator), 
            'required', SUM(r.investigator), 
            'shortfall', SUM(s.investigator)
          ),
          'Mental Health', json_build_object(
            'allocated', SUM(a.mental_health), 
            'required', SUM(r.mental_health), 
            'shortfall', SUM(s.mental_health)),
          'Support', json_build_object(
            'allocated', SUM(a.support), 
            'required', SUM(r.support), 
            'shortfall', SUM(s.support)
          ) 
      ) AS data
      FROM allocations a
      LEFT JOIN required r ON a.county_id = r.county_id
      LEFT JOIN shortfalls s ON a.county_id = s.county_id`
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Investigators, Mental Health, and Support Staff",
      data: result.rows[0].data
    }
  } catch (error) {
    console.error("REST SHORTFALL ERROR: ", error)
    return false
  }
}
async function getMaxCounty() {
  // type: "bar",
  const q = `
      SELECT c.name as name, s.attorney as value
      FROM shortfalls s JOIN counties c 
      ON s.county_id = c.id 
      ORDER BY value DESC LIMIT 5`
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Five Counties with the Largest Attorney Shortfall",
      data: result.rows
    }
  } catch (error) {
    console.error("MAX COUNTY ERROR: ", error)
    return false
  }
}
async function getMinCounty() {
  // type: "bar",
  const q = `
    SELECT c.name as name, s.attorney as value
    FROM shortfalls s 
    LEFT JOIN counties c 
    ON s.county_id = c.id 
    ORDER BY s.attorney ASC LIMIT 5`
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Five Counties with Smallest Attorney Shortfall",
      data: result.rows
    }
  } catch (error) {
    console.error("MIN COUNTY ERROR: ", error)
    return false
  }
}
async function getMaxJudicial() {
  // type: "bar",
  const q = `SELECT c.circuit as name, SUM(s.attorney) as value
FROM shortfalls s
LEFT JOIN counties c
ON s.county_id = c.id
GROUP BY c.circuit
ORDER BY value DESC limit 5`
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Five Judicial Circuits with Largest Attorney Shortfall",
      data: result.rows
    }
  } catch (error) {
    console.error("MIN COUNTY ERROR: ", error)
    return false
  }
}
async function getMinJudicial() {
  // type: "bar",
  const q = `SELECT c.circuit as name, SUM(s.attorney) as value
FROM shortfalls s
LEFT JOIN counties c
ON s.county_id = c.id
GROUP BY c.circuit
ORDER BY value limit 5`
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Five Judical Circuits with Smallest Attorney Shortfall",
      data: result.rows
    }
  } catch (error) {
    console.error("MIN COUNTY ERROR: ", error)
    return false
  }
}
async function getBudget() {
  // type: "budget",
  const q = `
  SELECT ARRAY[
    json_build_object('name', 'Prosecution', 'value', SUM(sa_fy_23)),
    json_build_object('name', 'Defense', 'value', SUM(pd_fy_23))
  ] AS data
  FROM budgets`
  try {
    const result = await query(q);
    if (!result) {
      return false
    }
    return {
      text: "Total Budget Allocation for Prosecution v. Defense Statewide",
      data: result.rows[0].data
    }
  } catch (error) {
    console.error("MIN COUNTY ERROR: ", error)
    return false
  }
}
async function getHighestPercentage() {
  // type: "percent-bar",
  return {
    text: "5 Counties with the Highest Attorney Shortfall Percentage",
    data: [
      { name: "Pulaski", value: 1486 },
      { name: "Pike", value: 745 },
      { name: "Fulton", value: 521 },
      { name: "Randolph", value: 494 },
      { name: "Clinton", value: 491 },
    ]
  }
}
async function getLowestPercentage() {
  // type: "percent-bar",
  return {
    text: "5 Counties with Lowest Attorney Shortfall Percentage",
    data: [
      { name: "Edwards", value: -35 },
      { name: "Putnam", value: -18 },
      { name: "Schuyler", value: 22 },
      { name: "McDonough", value: 25 },
      { name: "Cook", value: 26 },
    ]
  }
}

export default async function Findings() {
  const [
    countyShortfall,
    restShortfall,
    maxCounty,
    minCounty,
    maxJudical,
    minJudicial,
    budget,
    highestPercentage,
    lowestPercentage,
  ] = await Promise.all([
    getCountyShortFall(),
    getRestShortfall(),
    getMaxCounty(),
    getMinCounty(),
    getMaxJudicial(),
    getMinJudicial(),
    getBudget(),
    getHighestPercentage(),
    getLowestPercentage(),
  ])

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
