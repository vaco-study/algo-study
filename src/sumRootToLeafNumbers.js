function sumNumbers(root) {
  let total = 0;

  const traverse = (node, prevNumString = "") => {
    const curNumString = prevNumString + String(node.val);

    if (!node.left && !node.right) total += +curNumString;
    if (node.left) traverse(node.left, curNumString);
    if (node.right) traverse(node.right, curNumString);
  };

  traverse(root);

  return total;
}
