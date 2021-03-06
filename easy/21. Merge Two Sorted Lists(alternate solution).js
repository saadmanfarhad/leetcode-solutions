/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 && l2) {
        let resList = new ListNode(-1);
        let temp = resList;

        while(l1 && l2) {
            if(l1.val > l2.val) {
                temp.next = l2;
                l2 = l2.next;
            }
            else if(l1.val <= l2.val){
                temp.next = l1;
                l1 = l1.next;
            }
            temp = temp.next;
        }
        temp.next = l1 || l2;
        return resList.next;
    }
    return l1 ? l1 : l2;
};