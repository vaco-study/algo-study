function solution(k, dungeons) {
  const mappedDungeons = dungeons.map((element) => ({
    required: element[0],
    exhaustion: element[1],
  }));
  const allCases = getPermutations(mappedDungeons, mappedDungeons.length);

  return allCases.reduce(
    (acc, currentCase) => Math.max(getExplorersNum(currentCase, k), acc),
    -Infinity
  );
}

const getExplorersNum = (Case, stamina) => {
  let explorersNum = 0;

  for (const dungeon of Case) {
    if (stamina < dungeon.required) continue;

    stamina -= dungeon.exhaustion;
    explorersNum++;
  }

  return explorersNum;
};

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((element) => [element]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((element) => [fixed, ...element]);

    results.push(...attached);
  });

  return results;
};
