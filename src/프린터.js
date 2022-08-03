function solution(priorities, location) {
  let answer = 0;
  let printed = 0;
  let myDocument = location;

  while (priorities.length > 0) {
    let shiftedDocument = priorities.shift();

    if (
      priorities.filter((document) => document > shiftedDocument).length > 0
    ) {
      priorities.push(shiftedDocument);
    } else {
      printed++;

      if (myDocument === 0) {
        return (answer = printed);
      }
    }

    myDocument--;

    if (myDocument === -1) {
      myDocument = priorities.length - 1;
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
