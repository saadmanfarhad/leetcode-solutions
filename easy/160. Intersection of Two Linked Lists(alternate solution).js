/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 //Hash Table solution
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let nodes = {};
    let temp = headA;

    while(temp) {
        nodes[temp.val] = temp;
        temp = temp.next;
    }

    temp = headB;
    while(temp) {
        if(nodes[temp.val] === temp) return temp;
        temp = temp.next;
    }

    return null;
};