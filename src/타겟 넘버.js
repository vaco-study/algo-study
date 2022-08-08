function solution(numbers, target) {
  let count = 0;

  const dfs = (count, sum) => {
    if (count === numbers.length) {
      if (sum === target) count++;

      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  };

  dfs(0, 0);

  return count;
}
