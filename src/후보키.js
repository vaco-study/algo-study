function solution(relation) {
  const [rowSize, colSize] = [relation.length, relation[0].length];
  const notCandidateKeys = [];
  const candidateKeys = [];

  for (let col = 0; col < colSize; col++) {
    const arr = [];

    for (let row = 0; row < rowSize; row++) {
      arr.push(relation[row][col]);
    }

    const set = new Set(arr);

    if (arr.length !== set.size) {
      notCandidateKeys.push(col);

      continue;
    }

    candidateKeys.push([col]);
  }

  let i = 2;
  while (i <= colSize) {
    const allCases = getCombinations(notCandidateKeys, i);

    for (const Case of allCases) {
      let notMin = false;
      for (const candidateKey of candidateKeys) {
        if (candidateKey.every((col) => Case.includes(col))) {
          notMin = true;

          break;
        }
      }

      if (notMin) continue;

      const arr = [];
      for (let row = 0; row < rowSize; row++) {
        let tupleStr = "";
        for (const col of Case) {
          tupleStr += relation[row][col];
        }

        arr.push(tupleStr);
      }

      const set = new Set(arr);
      if (set.size !== rowSize) continue;

      candidateKeys.push(Case);
    }

    i++;
  }

  return candidateKeys.length;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((element) => [element]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((element) => [fixed, ...element]);

    results.push(...attached);
  });

  return results;
};
