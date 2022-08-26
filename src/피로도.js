function solution(k, dungeons) {
  let maxCount = -Infinity;
  const dungeonOrders = permutate(dungeons);

  for (const dungeonOrder of dungeonOrders) {
    let fatigue = k;
    let count = 0;

    for (const dungeon of dungeonOrder) {
      const [neededFatigue, spentFatigue] = dungeon;
      if (fatigue < neededFatigue) break;
      fatigue -= spentFatigue;
      count++;
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

function permutate(arr) {
  const result = [];

  const dfs = (targetArr, index) => {
    if (index === targetArr.length) {
      return result.push([...targetArr]);
    }

    for (let j = index; j < targetArr.length; j++) {
      [targetArr[index], targetArr[j]] = [targetArr[j], targetArr[index]];
      dfs(targetArr, index + 1);
      [targetArr[index], targetArr[j]] = [targetArr[j], targetArr[index]];
    }
  };

  dfs(arr, 0);

  return result;
}
