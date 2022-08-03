function solution(priorities, location) {
  const descending = priorities.sort((a, b) => b - a);
  let order = location - 1;

  for (let i = 0; i < priorities.length; i++) {
    if (priorities !== descending) {
      const first = priorities.shift();
      priorities.push(first);
      order--;

      if (order < 0) {
        order = priorities.length - 1;
      }
    } else {
      return order;
    }
  }
}