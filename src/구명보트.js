function solution(people, limit) {
  let result = 0;
  let lt = 0;
  let rt = people.length - 1;

  people.sort((a, b) => b - a);

  while (lt < rt) {
    const sum = people[lt] + people[rt];

    if (sum > limit) {
      lt++;
    } else {
      lt++;
      rt--;
    }

    result++;
  }

  if (lt === rt) {
    result++;
  }

  return result;
}
