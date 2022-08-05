function solution(numbers, target) {
  let result = 0;
  let sum = 0;
  let minusSum = 0;
  let maxSum = numbers.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < numbers.length; i++) {
    if (sum < target) sum += numbers[i];
    if (sum === target) {
      minusSum = maxSum - sum;
      break;
    }
    if (sum > target) {
      minusSum = maxSum - (sum - target);
      break;
    }
  }

  const possibleNums = [];

  for (let i = 0; i < numbers.length; i++) {
    const curNum = numbers[i];
    let acc = [curNum];

    if (curNum === minusSum) {
      possibleNums.push(curNum);
      continue;
    }

    for (let j = i + 1; j < numbers.length; j++) {
      acc.push(numbers[j]);
      const sum = acc.reduce((acc, cur) => acc + cur, 0);

      if (sum === minusSum) {
        possibleNums = [...possibleNums, ...curNum];
      }

      if (sum > minusSum) {
        continue;
      }
    }
  }
}
