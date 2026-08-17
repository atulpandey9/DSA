/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function revll(head){
let curr=head;
let prev=null;
let next;

while(curr){
    next=curr.next;
    curr.next=prev;
    prev=curr;
    curr=next
}
return prev;
 }

var isPalindrome = function(head) {
    let fast=head;
    let slow=head;
    let startptr=head;
    let length=0;

    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next;
        length++
    }
if(head.next===null){
    return true
}
    let mid=revll(slow);

    while(length){
        length--;
        if(mid.val!==startptr.val) return false;
        mid=mid.next;
        startptr=startptr.next;

     
    }
      return true 
};