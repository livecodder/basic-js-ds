const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this._stack = [];
  }

  push(element) {
    this._stack.push(element);
  }

  pop() {
    const element = this._stack.pop();
    return element;
  }

  peek() {
    const element = this._stack[this._stack.length - 1];
    return element;
  }
}

module.exports = {
  Stack,
};
