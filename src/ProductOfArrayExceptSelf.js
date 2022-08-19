/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function (nums) {
  let zeroCounter = 0;
  nums.forEach((element) => {
    if (element === 0) {
      zeroCounter++;
    }
  });

  if (zeroCounter > 1) {
    return nums.fill(0);
  }

  if (zeroCounter === 1) {
    let totalMulitpleWithoutZero = 1;

    nums.forEach((element) => {
      if (element !== 0) {
        totalMulitpleWithoutZero = element * totalMulitpleWithoutZero;
      }
    });

    console.log(totalMulitpleWithoutZero);

    return nums.map((element) => {
      if (element === 0) {
        return totalMulitpleWithoutZero;
      } else {
        return 0;
      }
    });
  } else {
    const totalMulitple = nums.reduce((a, x) => a * x, 1);

    return nums.map((element) => totalMulitple / element);
  }
};
