/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 //Recursive Solution
var isSymmetric = function(root) {
    if(!root || (!root.left && !root.right)) return true;
    return isMirror(root.left, root.right);
};

var isMirror = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;

    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}