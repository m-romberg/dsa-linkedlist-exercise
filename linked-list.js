/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.tail !== null) {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {

    let poppedNode = null;
    if (this.length === 0) {
      throw new Error("Cannot pop an empty list.");
    }
    if (this.length === 1) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
    }

    let current = this.head;
    while (current !== null) {
      if (current.next === this.tail) {
        poppedNode = this.tail;
        console.log("poppedNode", poppedNode);
        this.tail = current;
        current.next = null;
        this.length -= 1;
      }
      else {
        current = current.next;
      }
    }

    return poppedNode.val;

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
