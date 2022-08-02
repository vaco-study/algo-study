function solution(priorities, location) {
  const printOrder = [];
  const firstPriority = Math.max(...priorities);
  let flag = 0;

  while (true) {
    if (priorities[flag] === firstPriority) {
      return;
    }
  }
}
