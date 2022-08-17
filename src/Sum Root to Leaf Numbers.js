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
  const concatStrArr = [];

  const findLeaf = (node, str) => {
    const concatStr = str.concat(node.val);

    if (!node.left && !node.right) {
      concatStrArr.push(concatStr);

      return;
    }

    if (node.left) findLeaf(node.left, concatStr);

    if (node.right) findLeaf(node.right, concatStr);
  };

  findLeaf(root, "");

  const sum = concatStrArr
    .map((str) => Number(str))
    .reduce((acc, cur) => acc + cur, 0);

  return sum;
};
