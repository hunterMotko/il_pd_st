import { query } from '@/lib/db';

export async function getCountyShortFall() {
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
export async function getRestShortfall() {
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
export async function getMaxCounty() {
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
export async function getMinCounty() {
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
export async function getMaxJudicial() {
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
export async function getMinJudicial() {
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
export async function getBudget() {
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
export async function getHighestPercentage() {
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
export async function getLowestPercentage() {
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
