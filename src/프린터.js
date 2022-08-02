function solution(priorities, location) {
  let maxNumber = 0;
  let maxNumberIndex = 0;
  let myturn = 1;
  let newPriorities;

  for (let i = 0; i < priorities.length; i++) {
    maxNumber = Math.max(priorities[i], maxNumber);
  }

  maxNumberIndex = priorities.indexOf(maxNumber);

  if (location === maxNumberIndex) {
    return myturn;
  } else {
    newPriorities = priorities
      .slice(maxNumberIndex, priorities.length)
      .concat(priorities.slice(0, maxNumberIndex));

    myturn = priorities.length - maxNumberIndex + 1;

    return myturn;
  }
}
