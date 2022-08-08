function solution(priorities, location) {
  let count = 0;

  while (true) {
    const topPriority = Math.max(...priorities);
    const curPrint = priorities.shift();

    if (curPrint === topPriority) {
      count++;
      if (!location) return count;
    } else {
      priorities.push(curPrint);
    }

    location--;
    if (location === -1) location = priorities.length - 1;
  }
}
