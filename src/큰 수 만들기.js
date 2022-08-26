function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const element = number[i];

    while (k > 0 && stack[stack.length - 1] < element) {
      stack.pop();
      k--;
    }

    stack.push(element);
  }

  // '4321'처럼 뒤의 숫자가 앞의 숫자보다 큰 경우가 한 번도 없는 경우
  if (k > 0) stack.splice(stack.length - k, k);

  return stack.join('');
}
