/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const frequencyCounter = {};
  const idleCounter = {};
  let taskFinishedCount = 0;
  let times = 0;

  for (const task of tasks) {
    frequencyCounter[task] = frequencyCounter[task]
      ? frequencyCounter[task] + 1
      : 1;
  }

  let sortable = Object.entries(frequencyCounter)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  while (taskFinishedCount < tasks.length) {
    times++;
    let targetKey = null;

    for (const candidatetKey of Object.keys(sortable)) {
      if (idleCounter[candidatetKey] && idleCounter[candidatetKey] > 0)
        continue;

      if (sortable[candidatetKey] <= 0) continue;

      targetKey = candidatetKey;
      break;
    }

    if (targetKey === null) {
      for (const key of Object.keys(idleCounter)) {
        idleCounter[key] -= 1;
      }

      continue;
    }

    sortable[targetKey] -= 1;
    for (const key of Object.keys(idleCounter)) {
      idleCounter[key] -= 1;
    }

    idleCounter[targetKey] = n;

    sortable = Object.entries(sortable)
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    taskFinishedCount++;
  }

  return times;
};
