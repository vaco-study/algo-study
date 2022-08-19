var productExceptSelf = function (nums) {
  let productOfelements = [];
  let numOfZero = 0;
  let product = nums.reduce((acc, cur) => {
    if (cur === 0) {
      numOfZero++;
      return acc;
    }
    return acc * cur;
  }, 1);

  for (let num of nums) {
    if (numOfZero > 1) productOfelements.push(0);
    if (numOfZero === 0) productOfelements.push(product / num);

    if (numOfZero === 1) {
      num !== 0 ? productOfelements.push(0) : productOfelements.push(product);
    }
  }

  return productOfelements;
};
