/**
 * Leetcode
 * https://leetcode.com/problems/middle-of-the-linked-list/solution/
 *
 */

//=== Solution 1
class Node {
  constructor() {
    this.middle = null;
    this.current = null;
  }
  // Build ListNode object
  buildLinkedList(arr) {
    if (!arr) throw new Error("Input is not correct");
    return arr.reduceRight((next, value)=> ({value, next}), null);
  }
  // Logic code
  findMiddleLinkedList(input) {

    const objectLinked = this.buildLinkedList(input);
    this.middle = objectLinked;
    this.current = objectLinked;

    if (objectLinked) {
      let i = 0;
      while (this.current.next != null) {
        i++;
        if(i % 2 == 0) {
          this.middle = this.middle.next;
        }
        this.current = this.current.next;
      }
    } else {
      throw new Error("Input is not correct");
    }
    return this.middle;
  }
}

input = [1,2,3,4,5,6,7,8,9];
const linkedListNode = new Node();
const result = linkedListNode.findMiddleLinkedList(input);
// Print data
console.log(result);
return;
