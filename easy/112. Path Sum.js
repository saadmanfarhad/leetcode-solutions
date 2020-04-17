/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    if(root.val === sum && !root.left && !root.right) return true;

    return iteratePath(root, sum) ? true : false;
};

var iteratePath = function(node, target) {
    let ans = false;
    let subSum = target - node.val;
    console.log(subSum);

    if(subSum === 0 && !node.left && !node.right) {
        return true;
    }

    if(node.left) {
        ans = ans || iteratePath(node.left, subSum);
    }

    if(node.right) {
        ans = ans || iteratePath(node.right, subSum);
    }

    return ans;
}