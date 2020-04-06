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
 //Iterative Solution
var isSymmetric = function(root) {
    if(root === null) return true;
    if(!root.left && !root.right) return true;
    if(!root.left || !root.right) return false;

    let a = [root.left], b = [root.right];
    while(a.length && b.length) {
        let p = a.shift();
        let q = b.shift();

        if(!p || !q) return false;
        if(p.val !== q.val) return false;

        if(p.left || q.right){
            a.push(p.left);
            b.push(q.right);
        }

        if(p.right || q.left){
            a.push(p.right);
            b.push(q.left);
        }
    }
    return true;
};