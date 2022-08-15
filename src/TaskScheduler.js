const leastInterval = (tasks, n) => {
  let answer = 0;
  let obj = {};

  if (n === 0) answer = tasks.length;

  for (const a of tasks) {
    if (!obj[a]) {
      obj[a] = 1;
    } else {
      obj[a]++;
    }
  }

  console.log(obj);

  return answer;
};

leastInterval(["A", "A", "A", "B", "B", "B"], 2);

// 문제: https://leetcode.com/problems/task-scheduler/
