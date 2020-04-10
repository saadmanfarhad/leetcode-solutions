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
var minDepth = function(root) {
    if (!root) return 0;
    let height = 1;
    let queue = [root];

    while(queue.length) {
        let size = queue.length;

        while(size > 0) {
            let current = queue.shift();
            if(!current.left && !current.right) return height;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            size--;
        }

        height++;
    }

    return height;
};