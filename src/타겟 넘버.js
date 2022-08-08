function solution(numbers, target) {
  const totalSum = numbers.reduce((acc, cur) => acc + cur, 0);
  const mustBeMinus = (totalSum - target) / 2;

  function dfs(target, index) {
    let count = 0;

    for (let i = index; i < numbers.length; i++) {
      const temp = target - numbers[i];

      if (!temp) {
        count++;

        continue;
      }

      if (temp > 0) {
        count += dfs(temp, i + 1);
      }
    }

    return count;
  }

  return dfs(mustBeMinus, 0);
}
