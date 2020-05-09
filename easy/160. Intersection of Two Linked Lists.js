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
 //Brute Force Approach
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    if(headA === headB) return headA;

    let temp1 = headA;
    let temp2 = headB;

    while(temp1) {
        while(temp2) {
            if(temp1 === temp2) return temp1;
            temp2 = temp2.next;
        }
        temp2 = headB;
        temp1 = temp1.next;
    }

    return null;
};