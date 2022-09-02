const goodNodes = function (root) {
  let counter = 0;

  const traverse = function (node, maxValue) {
    if (node.val >= maxValue) {
      counter++;
    }

    if (node.left) traverse(node.left, Math.max(maxValue, node.val));
    if (node.right) traverse(node.right, Math.max(maxValue, node.val));
  };

  traverse(root, root.val);
  return counter;
};
