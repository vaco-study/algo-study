/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * @param {TreeNode} root 
 * @return {number}
 */

export default function sumNumbers(root) {
  const sumStrArr = [];

  function DFS(root, rootToLeaf = "") {
    rootToLeaf += root.val;

    if (!root.left && !root.right) return rootToLeaf;

    if (root.left) {
      sumStrArr.push(DFS(root.left, rootToLeaf));
    }

    if (root.right) {
      sumStrArr.push(DFS(root.right, rootToLeaf));
    }
  }

  const path = DFS(root);

  return path
    ? path
    : sumStrArr.reduce((acc, cur) => {
        if (!cur) return acc;

        return acc + parseInt(cur);
      }, 0);
};
