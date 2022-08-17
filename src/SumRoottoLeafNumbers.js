/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  function makingDateByDFSPreOrder(input) {
    const data = [];

    function traverse(node, temp) {
      const newTemp = temp + node.val;
      if (node.left) traverse(node.left, newTemp);
      if (node.right) traverse(node.right, newTemp);
      if (!node.left && !node.right) {
        data.push(newTemp);
      }
    }

    traverse(input, "");
    return data;
  }

  return makingDateByDFSPreOrder(root).reduce((a, x) => a + Number(x), 0);
};
