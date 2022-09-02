function goodNodes(root) {
  let count = 0;

  const countGoodNodes = (node, prevMaxVal = -Infinity) => {
    if (node.val >= prevMaxVal) count++;
    if (!node.left && !node.right) return;

    const curMaxVal = Math.max(node.val, prevMaxVal);

    if (node.left) countGoodNodes(node.left, curMaxVal);
    if (node.right) countGoodNodes(node.right, curMaxVal);
  };

  countGoodNodes(root);

  return count;
}
