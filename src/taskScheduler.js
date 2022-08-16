var leastInterval = function (tasks, n) {
  const taskCount = {};
  let maxVal = 0;
  let maxValCount = 0;

  for (const task of tasks) {
    taskCount[task] = (taskCount[task] || 0) + 1;

    if (taskCount[task] > maxVal) {
      maxVal = taskCount[task];
      maxValCount = 1;
    } else if (taskCount[task] === maxVal) {
      maxValCount++;
    }
  }

  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
