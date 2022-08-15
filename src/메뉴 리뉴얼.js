function solution(orders, course) {
  const result = [];

  for (const num of course) {
    const allCases = [];
    const CaseCounts = {};

    for (const order of orders) {
      if (num > order.length) continue;

      const combinations = getCombinations(order.split(""), num);

      for (const Case of combinations) {
        CaseCounts[Case] = CaseCounts[Case] ? CaseCounts[Case] + 1 : 1;
      }
    }

    const maxOrderNum = Math.max(...Object.values(CaseCounts));

    if (maxOrderNum < 2) continue;

    const candidateCases = Object.entries(CaseCounts)
      .filter((element) => element[1] === maxOrderNum)
      .map((element) => element[0]);

    result.push(...candidateCases);
  }

  return result.sort();
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results.map((element) => element.sort().join(""));
};
