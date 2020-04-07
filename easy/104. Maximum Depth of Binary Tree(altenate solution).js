/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 //Recursive Solution
var maxDepth = function(root) {
    return countDepth(root, 0);
};

var countDepth = function(node, count) {
    if(!node) return count;
    return Math.max(countDepth(node.left, count + 1), countDepth(node.right, count + 1));
}