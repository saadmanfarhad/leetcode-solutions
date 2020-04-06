/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 //Iterative Solution
var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if(!check(p,q)) return false;

    let depP = [];
    let depQ = [];
    depP.push(p);
    depQ.push(q);

    while(depP.length) {
        p = depP.shift();
        q = depQ.shift();

        if(!check(p,q)) return false;
        if(p !== null) {
            if(!check(p.left, q.left)) return false;
            if(p.left !== null) {
                depP.push(p.left);
                depQ.push(q.left);
            }
            if(!check(p.right, q.right)) return false;
            if(p.right !== null) {
                depP.push(p.right);
                depQ.push(q.right);
            }
        }
    }
    return true;
};

var check = function(p, q) {
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    if(p.val !== q.val) return false;
    return true;
}