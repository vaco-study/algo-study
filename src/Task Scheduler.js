var leastInterval = function (tasks, n) {
  // the map will be our tracking mechanism
  let numOfTasks = new Map();

  // the max occurrences
  let maxVal = 0;

  // the number of tasks that has the max occurrences
  let maxValCount = 0;

  for (let task of tasks) {
    let currentCount = numOfTasks.has(task) ? numOfTasks.get(task) + 1 : 1;
    numOfTasks.set(task, currentCount);
    // set our maxVal and number of maxVal tasks only if we have a new max
    if (currentCount > maxVal) {
      maxVal = currentCount;
      maxValCount = 1;
      // otherwise, increment number of maxVal tasks
    } else if (currentCount === maxVal) {
      maxValCount++;
    }
  }
  // our formula, handle the edge case
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
