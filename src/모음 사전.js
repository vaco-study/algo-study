const collection = ["A", "E", "I", "O", "U"];

const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const permutations = getPermutations(origin, num - 1);

    const attached = permutations.map((v) => [fixed, ...v]);

    results.push(...attached);
  });

  return results;
};

const getAllPermutations = (arr) => {
  let results = [];
  arr.forEach((value, index, origin) => {
    results.push(...getPermutations(origin, index + 1));
  });

  return results;
};

function solution(word) {
  let answer = 0;
  return answer;
}
