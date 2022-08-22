function solution(k, dungeons) {
  let maxCount = 0;
  const dungeonOrders = getPermutations(dungeons, dungeons.length);

  for (const dungeonOrder of dungeonOrders) {
    let fatigue = k;
    let count = 0;

    for (const dungeon of dungeonOrder) {
      const [minNeededFatigue, spentFatigue] = dungeon;
      if (fatigue < minNeededFatigue) break;

      fatigue -= spentFatigue;
      count++;
    }

    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
}

function getPermutations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
