import Node from './node.js'

export default class LinkedList {
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
    if (!this.head) return 0;
    let currentNode = this.head;
    let length = 1;
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

  toString() {
    if (!this.head) return '';
    let currentNode = this.head.nextNode;
    let outputString = `${this.head.value}`
    while (currentNode !== null) {
      outputString += ` -> ${currentNode.value}`;
      currentNode = currentNode.nextNode;
    }
    return outputString + ` -> null`;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) throw Error('Index must be between 0 and the length of the list.');
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    const newNode = new Node(value);
    previousNode.nextNode = newNode;
    newNode.nextNode = currentNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) throw Error(`Index must be between 0 and ${this.size() - 1}.`)
    if (index === 0) {
      const removedValue = this.head.value;
      this.head = this.head.nextNode;
      return removedValue;
    }
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    previousNode.nextNode = currentNode.nextNode;
    return currentNode.value;
  }
}