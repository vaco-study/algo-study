function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += helper(i, n);
  }

  return sum;
}

function helper(num, targetNum) {
  let sum = 0;

  if (num === targetNum) {
    return 1;
  }

  for (let i = num; i <= targetNum; i++) {
    sum += i;

    if (sum === targetNum) {
      return 1;
    }

    if (sum > targetNum) {
      return 0;
    }
  }
}
