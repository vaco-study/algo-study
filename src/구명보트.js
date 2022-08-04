function solution(people, limit) {
  let answer = 0;
  let i = 0;
  let j = people.length - 1;
  people = people.sort((a, b) => b - a);

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
      j--;
    } else {
      i++;
    }

    answer++;
  }

  return answer;
}
