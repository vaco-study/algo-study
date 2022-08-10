function solution(number, k) {
  const numArr = number.split("").map((char) => Number(char));
  const stack = [numArr[0]];
  let deletedCount = 0;

  if (k === number.length - 1) return Math.max(...numArr).toString();

  for (let i = 1; i < numArr.length; i++) {
    while (
      stack.length &&
      stack[stack.length - 1] < numArr[i] &&
      deletedCount < k
    ) {
      stack.pop();

      deletedCount++;
    }

    if (k - deletedCount < numArr.length - i) {
      stack.push(numArr[i]);
    }
  }

  return stack.join("");
}
