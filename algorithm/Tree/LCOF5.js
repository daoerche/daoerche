/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 剑指 Offer 55 - I. 二叉树的深度
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
