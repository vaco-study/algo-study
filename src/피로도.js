function solution(k, dungeons) {
  const permutatedDungeons = getPermutations(dungeons, dungeons.length);
  let maxCounter = 0;

  for (const permutatedDungeon of permutatedDungeons) {
    let fatigue = k;
    let counter = 0;

    for (const dungeon of permutatedDungeon) {
      if (fatigue < dungeon[0]) break;

      fatigue -= dungeon[1];
      counter++;
    }

    maxCounter = maxCounter < counter ? counter : maxCounter;
  }

  return maxCounter;
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
