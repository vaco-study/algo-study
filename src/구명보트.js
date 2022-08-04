function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let answer = 0;

  people.sort((a, b) => b - a);

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }

    answer++;
  }

  return answer;
}
