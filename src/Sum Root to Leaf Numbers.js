const sumNumbers = function(root) {
  return add(0, root);
};

const add = function (prevVal, root) {
  if (!root) {
    return prevVal;
  }

  const val = prevVal * 10 + root.val;

  return add(val, root.left) + add(val, root.right);
};
