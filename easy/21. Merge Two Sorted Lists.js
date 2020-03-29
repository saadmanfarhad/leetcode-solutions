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
        let temp1 = l1;
        let temp2 = l2;
        let resArray = [];

        while(temp1) {
            resArray.push(temp1.val);
            temp1 = temp1.next;
        }

        while(temp2) {
            resArray.push(temp2.val);
            temp2 = temp2.next;
        }

        resArray.sort((a,b) => a-b);
        let resList = new ListNode(resArray[0]);
        for(let i = 1 ; i < resArray.length ; i++) {
            let temp = resList;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = new ListNode(resArray[i]);
        }

        return resList;
    }
    return l1 ? l1 : l2;
};