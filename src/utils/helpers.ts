export const calcPercent = (d: number, pop = 1) =>
  ((d / pop) * 100).toFixed(2) + "%";

export const toDollar = (num: number = 0) =>
  num.toLocaleString("en-US", { style: "currency", currency: "USD" });

export const average = (num: number, len: number) => (num / len);

export const toLocale = (n: number): string => n.toLocaleString();

export const fillColors = [
  "bg-indigo-300",
  "bg-indigo-400",
  "bg-indigo-500",
  "bg-indigo-600",
  "bg-indigo-700",
  "bg-indigo-800",
];

export function findQuartiles(data: number[]): string[][] {
  const quintile = (arr: number[], q: number): number => {
    const position = (arr.length - 1) * q;
    const base = Math.floor(position);
    const rest = position - base;
    if (arr[base + 1] !== undefined) {
      return arr[base] + rest * (arr[base + 1] - arr[base]);
    } else {
      return arr[base];
    }
  };

  let max = Math.floor(data.pop() as number).toFixed(0);
  let q1 = Math.floor(quintile(data, 0.2)).toFixed(0);
  let q2 = Math.floor(quintile(data, 0.4)).toFixed(0);
  let q3 = Math.floor(quintile(data, 0.6)).toFixed(0);
  let q4 = Math.floor(quintile(data, 0.8)).toFixed(0);

  const res = [['<', q1], [q1, q2], [q2, q3], [q3, q4], [q4, max]]

  return res;
}

