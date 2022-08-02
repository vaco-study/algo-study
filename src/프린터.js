function solution(priorities, location) {
  let max = Math.max(...priorities);
  let changedLocation = location;
  let isTargetPrinted = false;
  let count = 0;

  while (!isTargetPrinted) {
    const target = priorities.shift();

    if (changedLocation === 0) {
      if (target < max) {
        priorities.push(target);
        changedLocation = priorities.length - 1;
      } else {
        count++;
        isTargetPrinted = true;
      }
    } else {
      if (target < max) {
        priorities.push(target);
      } else {
        count++;
        max = Math.max(...priorities);
      }

      changedLocation--;
    }
  }

  return count;
}
