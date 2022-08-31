const merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  let currentIndex = 0;

  for (let i = 1; i < intervals.length; i++) {
    const lastElementOfResult = result[result.length - 1];
    const tempArray = [lastElementOfResult, intervals[i]];

    if (tempArray[0][1] >= tempArray[1][0]) {
      result[result.length - 1] = [
        tempArray[0][0],
        Math.max(tempArray[0][1], tempArray[1][1]),
      ];
      continue;
    }

    result.push(intervals[i]);
  }

  return result;
};
