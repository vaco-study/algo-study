function solution(k, dungeons) {
  let result = 0;
  const permutation = getPermutaions(dungeons, dungeons.length);

  permutation.forEach((element) => {
    let count = 0;
    let startFatigue = k;

    for (let i = 0; i < element.length; i++) {
      if (element.length - i < result - count) {
        break;
      }

      const [minReqFatigue, exhaustionFatigue] = element[i];

      if (minReqFatigue <= startFatigue) {
        startFatigue -= exhaustionFatigue;
        count++;
      }
    }

    result = Math.max(result, count);
  });

  return result;
}

function getPermutaions(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, original) => {
    const rest = [...original.slice(0, index), ...original.slice(index + 1)];
    const permutaions = getPermutaions(rest, selectNumber - 1);
    const attachedArr = permutaions.map((elm) => [fixed, ...elm]);
    result.push(...attachedArr);
  });

  return result;
}
