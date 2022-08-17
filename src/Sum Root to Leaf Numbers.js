var sumNumbers = function(root) {
  const arr = [];
  
  checker(root, arr, "");

  return arr.reduce((acc, cur) => acc + +cur, 0);
};

function checker(node, arr, origin) {
  if (!node.left && !node.right) {
      origin += node.val.toString();
      
      return arr.push(origin);
  }

  origin += node.val.toString();

  if (node.left) checker(node.left, arr, origin);
  
  if (node.right) checker(node.right, arr, origin);
}
