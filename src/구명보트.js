function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let numOfBoats = 0;

  while (left <= right) {
    if (left === right) {
      numOfBoats++;
      break;
    }

    if (sortedPeople[right] + sortedPeople[left] > limit) {
      right--;
    } else {
      left++;
      right--;
    }

    numOfBoats++;
  }

  return numOfBoats;
}
