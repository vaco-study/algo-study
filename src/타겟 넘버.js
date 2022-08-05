function solution(numbers, target) {
  const sum = numbers.slice().reduce((prev, curr) => prev + curr);
  const minusTarget = (sum - target) / 2;
  const smallers = numbers.filter((number) => number <= minusTarget);

  let counter = 0;

  for (let i = 0; i < smallers.length; i++) {
    let total = smallers[i];

    if (total === minusTarget) {
      counter++;
      continue;
    }

    for (let j = i + 1; j < smallers.length; j++) {
      const tempTotal = total + smallers[j];

      if (tempTotal === minusTarget) {
        counter++;
        total = smallers[i];
      }

      if (tempTotal < minusTarget) {
        total = tempTotal;
      }
    }
  }

  return counter;
}
