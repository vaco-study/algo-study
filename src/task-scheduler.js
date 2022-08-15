/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

const leastInterval = function (tasks, n) {
  if (!n) {
    return tasks.length;
  }

  const map = new Map();

  for (const element of tasks) {
    map.has(element)
      ? map.set(element, map.get(element) + 1)
      : map.set(element, 1);
  }

  const [maxCount, sameMaxCount] = findMaxCountAndSameMaxCount(map);
  const idles = (maxCount - 1) * n;
  const remains = tasks.length - maxCount - idles - sameMaxCount;

  return sameMaxCount === n
    ? maxCount + sameMaxCount + idles + remains
    : maxCount + sameMaxCount + idles;
};

const findMaxCountAndSameMaxCount = (map) => {
  let sameMaxCount = 0;
  const max = Math.max(...map.values());

  for (const count of map.values()) {
    if (count === max) {
      sameMaxCount++;
    }
  }

  return [max, sameMaxCount - 1];
};
