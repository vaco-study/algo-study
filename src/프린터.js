function solution(priorities, location) {
  let mostImportant = Math.max(...priorities);
  let printed = 0;

  while(priorities.length > 0) {
    let currDocument = priorities[0];

    priorities.shift();

    if (currDocument < mostImportant) {
      priorities.push(currDocument);
    } else {
      printed++;

      if (location === 0) return printed;

      if (currDocument === mostImportant) {
        mostImportant = Math.max(...priorities);
      }
    }

    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }
}
