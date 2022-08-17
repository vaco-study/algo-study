var sumNumbers = function (root) {
  let total = 0;

  const helper = (node, prevValue) => {
    const curValue = prevValue
      ? prevValue + String(node.val)
      : String(node.val);

    if (!node.left && !node.right) {
      total += +curValue;
      return;
    }

    if (node.left) helper(node.left, curValue);
    if (node.right) helper(node.right, curValue);
  };

  helper(root);

  return total;
};
