function solution(numbers, target) {
  let sum = 0;
  let answer = 0;
  let newNumbers = numbers.slice();

  for (let i = 0; i < newNumbers.length; i++) {
    newNumbers.splice(i, 1, newNumbers[i] * -1);
    newNumbers.forEach((number) => (sum += number));

    if (sum === target) {
      answer++;
    }

    newNumbers = numbers.slice();
    sum = 0;
  }

  return answer;
}
