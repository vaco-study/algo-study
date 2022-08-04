function solution(people, limit) {
  let answer = 0;
  const copyPeople = people.slice().sort((a, b) => b - a);

  for (let i = 0, j = copyPeople.length - 1; i <= j; i++, answer++)
    if (copyPeople[i] + copyPeople[j] <= limit) j--;

  return answer;
}
