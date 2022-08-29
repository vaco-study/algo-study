function solution(relation) {
  debugger;
  const notCandidate = [];
  const candidates = [];

  for (let i = 0; i < relation[0].length; i++) {
    const target = [];

    for (let j = 0; j < relation.length; j++) {
      target.push(relation[j][i]);
    }

    const removedDuplication = new Set(target);

    if (target.length === removedDuplication.size) {
      candidates.push([i]);

      continue;
    }

    notCandidate.push(i);
  }

  for (let i = 2; i <= relation[0].length; i++) {
    const combinations = getCombinations(notCandidate, i);

    for (const combination of combinations) {
      // 최소성 체크
      let isMin = true;

      for (const candidate of candidates) {
        if (candidate.every((key) => combination.includes(key))) {
          isMin = false;

          break;
        }
      }

      if (!isMin) continue;

      // 유일성 체크
      const key = [];

      for (let i = 0; i < relation.length; i++) {
        let contiguousString = "";

        for (const column of combination) {
          contiguousString += relation[i][column];
        }

        key.push(contiguousString);
      }

      const removedDuplication = new Set(key);

      if (key.length === removedDuplication.size) {
        candidates.push(combination);
      }
    }
  }

  return candidates.length;
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
