function solution(numbers, target) {
  let count = 0;

  const dfs = (index = 0, sum = 0) => {
    if (index > numbers.length - 1) {
      if (sum === target) count++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };

  dfs();

  return count;
}
