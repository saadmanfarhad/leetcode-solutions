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
 //Iterative Solution
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [{node: root, depth: 1}];
    let max = 1;
    while(queue.length) {
        let current = queue.shift();
        if(current.node.left){
            queue.push({node: current.node.left, depth: current.depth + 1})
        }
        if(current.node.right){
            queue.push({node: current.node.right, depth: current.depth + 1})
        }

        if(max < current.depth) max = current.depth;
    }

    return max;
};
