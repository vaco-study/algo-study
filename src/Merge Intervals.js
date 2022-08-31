var merge = function (intervals) {
  const [START_TIME, END_TIME] = [0, 1];
  const sortedIntervals = intervals.slice().sort((a, b) => a[0] - b[0]);

  const stack = [sortedIntervals[0]];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const lastInterval = stack[stack.length - 1];

    if (sortedIntervals[i][START_TIME] > lastInterval[END_TIME]) {
      stack.push(sortedIntervals[i]);
      continue;
    }

    lastInterval[END_TIME] = Math.max(
      sortedIntervals[i][END_TIME],
      lastInterval[END_TIME]
    );
  }

  return stack;
};
