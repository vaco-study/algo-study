var productExceptSelf = function(nums) {
  const answer = [];
  const left = Array(nums.length + 1).fill(1);
  const right = Array(nums.length + 1).fill(1);

  for (let i = 0; i < nums.length; i++) {
    left[i + 1] = nums[i] * left[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    right[j] = nums[j] * right[j + 1];
  }

  for (let k = 0; k < nums.length; k++) {
    answer.push(left[k] * right[k + 1])
  }

  return answer;
};
