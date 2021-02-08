/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 剑指 Offer 54. 二叉搜索树的第k大节点
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargest = function(root, k) {
  const sortArray = [];
  const traverse = node => {
    if (node.left) traverse(node.left);
    if (node) {
      sortArray.push(node.val);
    }
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return sortArray[sortArray.length - k];
};
