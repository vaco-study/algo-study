const goodNodes = function (root) {
  const node = root;
  const path = "";
  let counter = 1;

  const traverse = function (node, path) {
    if (!node) {
      return;
    }

    const paths = path.split(",");
    paths.pop();
    const maxValue = Math.max(...paths);

    if (maxValue !== -Infinity && node.val >= maxValue) {
      counter++;
    }

    traverse(node.left, path + node.val + ",");
    traverse(node.right, path + node.val + ",");
  };

  traverse(node, path);

  return counter;
};
