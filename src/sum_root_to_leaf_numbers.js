const sumNumbers = (root) => {
  return helper(root, 0);
};

const helper = (currentRoot, sum) => {
  if (!currentRoot) {
    return 0;
  }

  const { val, left, right } = currentRoot;

  sum = +`${sum}${val}`;

  if (!left && !right) {
    return sum;
  }

  return helper(left, sum) + helper(right, sum);
};
