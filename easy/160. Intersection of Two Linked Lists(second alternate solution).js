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
 // Two pointers solution
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let nodes = {};
    let temp1 = headA;
    let temp2 = headB;
    let lNodeA = null;
    let lNodeB = null;

    while(true) {
        if(temp1 === temp2) return temp1;
        if(!temp1.next){
            lNodeA = temp1;
            temp1 = headB;
        } else {
            temp1 = temp1.next;
        }
        if(!temp2.next){
            lNodeB = temp2;
            temp2 = headA;
        } else {
            temp2 = temp2.next;
        }
        if(lNodeA && lNodeB){
            if(lNodeA !== lNodeB) return null;
        }
    }

    return null;
};