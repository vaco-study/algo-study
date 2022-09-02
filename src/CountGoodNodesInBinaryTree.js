const goodNodes = function (root) {
  let counter = 0;

  const traverse = function (node, maxValue) {
    if (node.val >= maxValue) {
      counter++;
      maxValue = node.val;
    }

    if (node.left) traverse(node.left, maxValue);
    if (node.right) traverse(node.right, maxValue);
  };

  traverse(root, root.val);
  return counter;
};
