function solution(relation) {
  const attributes = Array.from({ length: 4 }).fill([]);
  let result = 0;

  for (let i = 0; i < relation[0].length; i++) {
    for (let j = 0; j < relation.length; j++) {
      attributes[i] = [...attributes[i], relation[j][i]];
    }
  }

  [...attributes].forEach((element, index) => {
    const removedDuplication = new Set(element);

    if (element.length === removedDuplication.size) {
      result++;
      attributes.splice(index, 1);
    }
  });

  const combinations = [];

  for (let i = 2; i < attributes.length; i++) {
    combinations.push(...getCombinations(attributes, i));
  }

  return attributes;
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

  return results;
};
