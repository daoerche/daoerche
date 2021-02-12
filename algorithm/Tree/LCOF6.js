/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @title Leetcode: 剑指 Offer 55 - II. 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  const traverse = node => {
    if (!node) return 0;

    const leftDeep = traverse(node.left);
    const rightDeep = traverse(node.right);

    if (leftDeep < 0 || rightDeep < 0 || Math.abs(leftDeep - rightDeep) > 1) return -1;
    return Math.max(leftDeep + 1, rightDeep + 1);
  }

  return traverse(root) !== -1;
};
