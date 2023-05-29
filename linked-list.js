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
        this.tail = current;
        current.next = null;
        this.length -= 1;
      } else {
        current = current.next;
      }
    }

    return poppedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let poppedNode = this.head;

    if (this.length === 0) {
      throw new Error("Cannot pop an empty list.");
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return poppedNode.val;
    }

    this.head = this.head.next;
    this.length -= 1;

    return poppedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Not in range.");
    }

    let count = 0;
    let current = this.head;

    while (count < idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Not in range.");
    }

    let count = 0;
    let current = this.head;

    while (count < idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    console.log("idx", idx, "val", val);

    if (idx < 0 || idx > this.length) {
      throw new Error("Not in range.");
    }

    if (this.length === 0) {
      return this.unshift(val);
    }

    if (this.length === idx) {
      return this.push(val);
    }

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let count = 0;
    let current = this.head;

    while (count < idx -1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    let poppedNode = null;

    if (idx < 0 || idx >= this.length) {
      throw new Error("Not in range.");
    }

    if (this.length === 1){
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return poppedNode.val;
    }

    if (this.length - 1 === idx){
      return this.pop();
    }

    if (idx === 0){
      poppedNode = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return poppedNode.val;
    }

    let count = 0;
    let current = this.head;

    while (count < idx - 1 ) {
      current = current.next;
      count++;
    }

    poppedNode = current.next;
    current.next = current.next.next;

    this.length -= 1;

    return poppedNode.val;

  }

  /** average(): return an average of all values in the list */

  average() {

    let sum = 0;
    let idx = 0;
    let current = this.head;
    if (current === null){
      return sum;
    }
    while (idx < this.length) {
      sum += current.val;
      current = current.next;
      idx++;
    }
    return (sum / this.length);
  }
}

module.exports = LinkedList;
