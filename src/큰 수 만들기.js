function solution(number, k) {
  const numbers = number.split("").map((num) => Number(num));
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const isRemaining =
      numbers.length - (i + 1) >= numbers.length - k - result.length;

    if (numbers[i] < numbers[i + 1] && isRemaining) {
      continue;
    }

    if (result[result.length - 1] < numbers[i] && isRemaining) {
      result[result.length - 1] = numbers[i];
      continue;
    }

    result.push(numbers[i]);

    if (result.length === numbers.length - k) {
      break;
    }
  }

  return result.join("");
}
