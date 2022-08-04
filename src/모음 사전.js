const solution = (word) => {
  const alphabetArr = ["A", "E", "I", "O", "U"];
  const allCases = getAllPermutations(alphabetArr);

  allCases.sort();

  return allCases.indexOf(word) + 1;
};

const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr;

  arr.forEach((fixed, _, origin) => {
    const permutations = getPermutations(origin, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);

    results.push(...attached);
  });

  return results.map((element) => element.join(""));
};

const getAllPermutations = (arr) => {
  let results = [];
  arr.forEach((_, index, origin) => {
    results.push(...getPermutations(origin, index + 1));
  });

  return results;
};
