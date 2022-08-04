function solution(people, limit) {
  let sortedPeople = people.sort((a, b) => a - b);
  let count = 0;

  while (sortedPeople.length > 0) {
    const lightest = sortedPeople[0];
    const heaviest = sortedPeople[sortedPeople.length - 1];

    if (lightest + heaviest <= limit) {
      count++;
      sortedPeople.pop();
      sortedPeople.shift();   
    } else {
      count++;
      sortedPeople.pop();
    }
  }

  return count;
}
