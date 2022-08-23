function solution(k, dungeons) {
  debugger;
  let maxVisited = Number.MIN_SAFE_INTEGER;

  const permutations = getPermutation(dungeons, dungeons.length);

  for (const permutation of permutations) {
    let fatigue = k;
    let visited = 0;

    for (const [need, consumption] of permutation) {
      if (fatigue < need) break;

      fatigue -= consumption;
      visited++;
    }

    maxVisited = Math.max(maxVisited, visited);
  }

  return maxVisited;
}

function getPermutation(array, k) {
  debugger;
  if (k === 1) return array.map((v) => [v]);
  const result = [];

  array.forEach((value, index, origin) => {
    const restArray = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = getPermutation(restArray, k - 1);
    const attached = permutation.map((element) => [value, ...element]);
    result.push(...attached);
  });

  return result;
}
