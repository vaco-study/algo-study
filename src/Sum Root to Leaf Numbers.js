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
  const result = [];

  function recursion(root, rootToLeaf = "") {
    rootToLeaf += root.val;

    if (!root.left && !root.right) return rootToLeaf;

    if (root.left) {
      result.push(recursion(root.left, rootToLeaf));
    }

    if (root.right) {
      result.push(recursion(root.right, rootToLeaf));
    }
  }

  const path = recursion(root);

  return path
    ? path
    : result.reduce((acc, cur) => {
        if (!cur) return acc;

        return acc + parseInt(cur);
      }, 0);
};
