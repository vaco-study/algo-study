/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let multi = 1;
  let zeros = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
  if (!num) {
    multi *= 1;
    zeros++;
    
    if (zeros > 1) {
      multi *= 0;
      
      return new Array(nums.length).fill(0);
    }
  } else {
    multi *= num;
  }
}

return nums.map((num) => {
  if (!num) return multi;
  
  return zeros === 1 ? 0 : multi / num;
  });
};
