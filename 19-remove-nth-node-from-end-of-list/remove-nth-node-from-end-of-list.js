/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummynode=new ListNode(-1);
    dummynode.next=head;
    let left=dummynode;
    let right=head;

    while(right && n>0){
        right=right.next;
        n-=1;
    }

     while(right){
        left=left.next;
        right=right.next;
     }
     left.next=left.next.next;

     return dummynode.next;

};