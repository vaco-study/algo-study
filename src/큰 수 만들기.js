const solution = (number, k) => {
  const numberToArray = [...number];

  const combinations = getCombinations(numberToArray, number.length - k);
  return Math.max(...combinations).toString();
};

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => fixed + el);

    results.push(...attached);
  });

  return results;
};
