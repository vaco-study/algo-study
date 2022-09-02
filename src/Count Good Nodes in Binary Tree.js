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
var goodNodes = function (root) {
  let count = 0;

  const dfs = (node, max) => {
    if (node.val >= max) count++;

    if (!node.left && !node.right) return;

    if (node.left) dfs(node.left, Math.max(node.val, max));
    if (node.right) dfs(node.right, Math.max(node.val, max));
  };

  dfs(root, root.val);

  return count;
};
