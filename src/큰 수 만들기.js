function solution(number, k) {
  const numArr = number.split("").map((char) => Number(char));
  const stack = [];
  const targetNum = number.length - k;

  for (let i = 0; i < numArr.length; i++) {
    while (stack.length && stack[stack.length - 1] < numArr[i] && k > 0) {
      stack.pop();

      k--;
    }

    if (stack.length < targetNum) {
      stack.push(numArr[i]);
    }
  }

  return stack.join("");
}
