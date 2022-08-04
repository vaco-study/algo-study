function solution(priorities, location) {
  let theMostPriority = Math.max(...priorities);
  let changedLocation = location;
  let isTargetPrinted = false;
  let count = 0;

  while (!isTargetPrinted) {
    const target = priorities.shift();

    if (changedLocation === 0) {
      if (target < theMostPriority) {
        priorities.push(target);
        changedLocation = priorities.length - 1;
        continue;
      }

      count++;
      isTargetPrinted = true;
    } else {
      if (target < theMostPriority) {
        priorities.push(target);
        changedLocation--;
        continue;
      }

      count++;
      changedLocation--;
      theMostPriority = Math.max(...priorities);
    }
  }

  return count;
}
