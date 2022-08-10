function solution(number, k) {
  let max = -Infinity;
  const targetDigit = number.length - k;
  let curNum = number[0];
  let left = 0;
  let right = left + 1;
  let temp = left + 1;

  while (left < number.length - targetDigit) {
    curNum += number[right];

    if (curNum.length === targetDigit) {
      max = Math.max(curNum, max);
      right = temp + 1;
      temp++;
    }

    if (right === number.length - 1) {
      left++;
      right = temp = left + 1;
    }
  }

  return max + "";
}
