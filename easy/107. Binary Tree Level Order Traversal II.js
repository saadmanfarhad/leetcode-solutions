/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 //Iterative Solution
var levelOrderBottom = function(root) {
    if(!root) return [];
    let queue = [root];
    let result = [];

    while(queue.length) {
        let level = [];
        let size = queue.length;

        while(size > 0) {
            let current = queue.shift();
            level.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            size--;
        }
        result.push(level);
    }

    return result.reverse();
};