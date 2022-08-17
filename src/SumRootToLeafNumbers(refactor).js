const sumNumbers = function (root) {
  return makingDataByDFS(root).reduce((a, x) => a + Number(x), 0);
};

const makingDataByDFS = function (input) {
  const data = [];

  const traverse = function (node, temp) {
    if (!node.left && !node.right) {
      data.push(temp + node.val);
    }

    if (node.left) traverse(node.left, temp + node.val);
    if (node.right) traverse(node.right, temp + node.val);
  };

  traverse(input, "");
  return data;
};
