function productExceptSelf(nums) {
  const answer = [];
  let total = nums.reduce((acc, cur) => acc * cur, 1);

  if (!total) {
    let zeroPlace = [];

    for (let i = 0; i < nums.length; i++) {
      if (!nums[i]) zeroPlace.push(i);

      if (zeroPlace.length > 1) {
        return Array.from({ length: nums.length }, () => 0);
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (!nums[i]) {
        answer[i] = -1;
        continue;
      }

      answer[i] = 0;
    }

    answer[zeroPlace[0]] = nums.reduce((acc, cur) => {
      if (!cur) return acc;
      return acc * cur;
    }, 1);

    return answer;
  }

  for (let i = 0; i < nums.length; i++) {
    total /= nums[i];
    answer.push(total);
    total *= nums[i];
  }

  return answer;
}
