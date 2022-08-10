function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      k--;
      stack.pop();
    }

    stack.push(num);
  }

  return stack.join("");
}
