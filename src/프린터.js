function solution(priorities, location) {
  let index = 0;
  let count = 1;
  
  while(true) {
      const order = Math.max(...priorities);
      
      if (priorities[index] === order) {
          if (index === location) return count;

          priorities[index] = 0;
          count++;
      }

      index++;

      if (index === priorities.length) index = 0;
  }
}
