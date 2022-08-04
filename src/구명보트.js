function solution(people, limit) {
  const ascendingPeople = people.sort((a, b) => a - b);
  const boat = [ascendingPeople[0]];

  for (let i = 1; i < ascendingPeople.length; i++) {
    if (boat[boat.length - 1] + ascendingPeople[i] <= limit) {
      boat[boat.length - 1] += ascendingPeople[i];
      continue;
    }

    boat.push(ascendingPeople[i]);
  }

  return boat.length;
}
