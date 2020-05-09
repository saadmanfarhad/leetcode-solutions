/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let runnerOne = head;
    let runnerTwo = head.next;

    while(runnerOne.next && runnerTwo.next) {
        if(runnerOne === runnerTwo) return true;
        runnerOne = runnerOne.next ? runnerOne.next : -1;
        runnerTwo = runnerTwo.next.next ? runnerTwo.next.next : -1;
        if(runnerOne === -1 || runnerTwo === -1) return false;
    }

    return false;
};