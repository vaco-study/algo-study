function solution(numbers, target) {
  const totalSum = numbers.reduce((acc, cur) => acc + cur, 0);
  const mustBeMinus = (totalSum - target) / 2;
  let temp = 0;
  let count = 0;
  let index = 0;

  while (index < numbers.length) {
    if (numbers[index] > mustBeMinus) {
      index++;
      continue;
    }

    if (numbers[index] < mustBeMinus) {
      temp = numbers[index];
      let newIndex = index + 1;

      while (newIndex < numbers.length) {
        if (temp + numbers[newIndex] === mustBeMinus) {
          count++;
        }

        newIndex++;
      }
    }

    if (numbers[index] === mustBeMinus) {
      count++;
    }

    index++;
  }

  return count;
}
