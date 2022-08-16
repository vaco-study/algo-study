var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;

  const counter = new Map();

  for (let task of tasks) {
    const target = counter.get(task);

    if (counter.has(task)) {
      counter.set(target, target + 1);
    } else {
      counter.set(target, 1);
    }
  }

  const order = [];
  let i = 0;

  while (tasks.length > 0) {
    // 랜덤도 가능한데.. 그럼 다시 0부터 가야하는거 아닌가?
    if (order[order.length - 1]) {
    }
  }
};
