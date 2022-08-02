function solution(priorities, location) {
  let count = 0;

  while(true) {
    if (location < 0) {
      return count;
    }

    if (priorities[0] < Math.max(...priorities)) {
      location--;
      priorities.push(priorities.shift());

      if (location < 0) {
        location = priorities.length - 1;
      }
    } else {
      count++;
      location--;
      priorities.shift();
    }
  }
}
