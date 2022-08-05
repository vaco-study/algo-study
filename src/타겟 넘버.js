function solution(numbers, target) {
  dfs(numbers, 0);

  const filteredCases = allCases.filter(
    (element) =>
      element.length === numbers.length &&
      element.reduce((acc, cur) => acc + cur, 0) === target
  );

  return filteredCases.length;
}

let allCases = [];

const dfs = (nums, num, arr = [], rest = []) => {
  allCases.push([...arr, ...rest, ...nums]);

  for (let i = 0; i < nums.length; i++) {
    arr.push(-nums[i]);
    dfs(nums.slice(i + 1), num + 1, arr, nums.slice(0, i));
    arr.pop();
  }
};
