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
var isBalanced = function(root) {
    if(!root) return true;
    let queue = [root];

    while(queue.length) {
        let current = queue.shift();
        let lHeight = current.left ? getHeight(current.left, 0) : 0;
        let rHeight = current.right ? getHeight(current.right, 0) : 0;

        console.log(lHeight, rHeight);

        if(Math.abs(lHeight - rHeight) > 1) return false;

        if(lHeight) queue.push(current.left);
        if(rHeight) queue.push(current.right);
    }

    return true;
};

var getHeight = function(node, current) {
    if(!node) return current;

    return Math.max(getHeight(node.left, current + 1), getHeight(node.right, current + 1));
}