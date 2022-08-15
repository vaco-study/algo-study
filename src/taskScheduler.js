/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (!n) return tasks.length;

  let count = 0;
  let tasksLength = tasks.length;
  let left = 0;
  let right = tasks.length - 1;
  let idleCount = 0;
  const newTaskOrder = [];

  const stack = [];
  const taskCount = {};

  while (left <= right) {
    if (tasks[left] === tasks[right]) break;

    newTaskOrder.push(tasks[left]);
    newTaskOrder.push(tasks[right]);

    taskCount[tasks[left]] = (taskCount[tasks[left]] || 0) + 1;
    taskCount[tasks[right]] = (taskCount[tasks[right]] || 0) + 1;

    left++;
    right--;
  }

  while (tasksLength) {
    const curTask = newTaskOrder.shift();
    if (stack[stack.length - 1] !== curTask) {
      stack.push(curTask);
      count++;
    } else {
      tasks.push(curTask);
    }

    tasksLength--;
  }

  for (const count of Object.values(taskCount)) {
    if (count > n) {
      idleCount += Math.floor(count % n);
    }
  }

  return stack.length + idleCount;
};
