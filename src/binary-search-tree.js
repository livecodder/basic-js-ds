const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data, element = this._root) {
    const treeNode = new Node(data);

    if (!this._root) {
      this._root = treeNode;
      return;
    }

    if (data < element.data) {
      if (element.left) {
        this.add(data, element.left);
      } else {
        element.left = treeNode;
      }
    } else if (data > element.data) {
      if (element.right) {
        this.add(data, element.right);
      } else {
        element.right = treeNode;
      }
    }
  }

  has(data, element = this._root) {
    if (!element) return false;

    if (data === element.data) return true;

    const next = data < element.data ? element.left : element.right;

    return this.has(data, next);
  }

  find(data, element = this._root) {
    if (!element) return null;

    if (data === element.data) return element;

    const next = data < element.data ? element.left : element.right;

    return this.find(data, next);

  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min(element = this._root) {
    if (!element) return null;

    const next = element.left;

    if (!next) return element.data;

    return this.min(next);
  }

  max(element = this._root) {
    if (!element) return null;

    const next = element.right;

    if (!next) return element.data;

    return this.max(next);
  }
}

module.exports = {
  BinarySearchTree,
};
