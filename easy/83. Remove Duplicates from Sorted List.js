/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head){
        let temp = head;
        let runner = head.next ? head.next : null;
        let numberMap = {};
        numberMap[head.val] = true;
        while(runner) {
            if(numberMap[runner.val]){
                runner = runner.next;
            }
            else{
                numberMap[runner.val] = true;
                temp.next = runner;
                temp = temp.next;
                runner = runner.next;
            }
        }
        temp.next = null;
    }
    return head;
};