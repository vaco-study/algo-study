/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];

  nums.reduce((acc, cur) => {
    answer.push(acc);
    return acc * cur;
  }, 1);

  [...nums].reverse().reduce((acc, cur, idx) => {
    answer[answer.length - idx - 1] *= acc;
    return acc * cur;
  }, 1);

  return answer;
};
