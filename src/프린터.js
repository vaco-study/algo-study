function solution(priorities, location) {
  let answer = 0;
  const target = priorities[location];
  const mostImportantTask = Math.max(...priorities);

  while (mostImportantTask !== priorities[0]) {
    if (mostImportantTask > priorities[0]) {
      const shiftedDocuments = priorities.shift();

      priorities.push(shiftedDocuments);
    }
  }

  answer = priorities.findIndex((element) => target === element) + 1;

  return answer;
}
