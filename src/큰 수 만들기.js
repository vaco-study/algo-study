function solution(number, k) {
  const stack = [number[0]];
  let count = 0;

  for (let i = 1; i < number.length; i++) {
    const target = number[i];

    while (stack[stack.length - 1] < target && k > count) {
      stack.pop();
      count++;
    }

    if (stack.length < number.length - k) {
      stack.push(number[i]);
    }
  }

  return stack.join("");
}
