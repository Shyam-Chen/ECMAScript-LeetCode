interface MaximumPopulation {
  (logs: number[][]): number;
}

export const maximumPopulation: MaximumPopulation = (logs) => {
  const map = new Map();

  for (const log of logs) {
    const [birth, death] = log;

    for (let year = birth; year < death; year += 1) {
      map.set(year, 1 + (map.get(year) || 0));
    }
  }

  const [birthi, deathi] = [1950, 2050];
  const maxCount = Math.max(...map.values());

  let maxYear = birthi;

  for (let year = birthi; year <= deathi; year += 1) {
    if (map.get(year) === maxCount) {
      maxYear = year;
      break;
    }
  }

  return maxYear;
};
