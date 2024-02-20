import Node from './node.js'

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;

  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let currentNode = this.head;
    let length = 0;
    while (currentNode.nextNode !== null) {
      length++;
      currentNode = currentNode.nextNode;
    }
    return length;
  }

  head() {
    return this.head || null;
  }

  tail() {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (index < 0 || index >= this.size()) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let previousNode;
    while (this.head !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (previousNode == null) {
      this.head = null;
    } else {
      previousNode.nextNode = null;
    }
    return currentNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }
}

const newList = new LinkedList;
newList.append('Zoka');
newList.prepend('Luka');
newList.prepend('Devin');
newList.prepend('Kevin');

console.log(newList.size());
console.log(newList.contains('Zoka'));
console.log(newList.find('Zoka'));
