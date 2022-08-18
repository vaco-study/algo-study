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
  let sum = 0;

  function recursion(root, rootToLeaf = "") {
    rootToLeaf += root.val;

    if (!root.left && !root.right) return (sum += parseInt(rootToLeaf));
    if (root.left) recursion(root.left, rootToLeaf);
    if (root.right) recursion(root.right, rootToLeaf);
  }

  recursion(root);

  return sum;
};
