function solution(people, limit) {
  let boatsNum = 0;
  const sortedPeople = people.slice().sort((a, b) => a - b);

  while (sortedPeople.length) {
    const [heaviest, lightest] = [sortedPeople.pop(), sortedPeople[0]];

    if (heaviest + lightest <= limit) sortedPeople.shift();

    boatsNum++;
  }

  return boatsNum;
}
