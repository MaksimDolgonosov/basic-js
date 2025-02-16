const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  error: false,
  arr: [],
  getLength() {
    return this.arr.length
    return chainMaker;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  addLink(value) {

    this.arr.push(`( ${value} )`)
    this.arr.push('~~')

    return chainMaker;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  removeLink(position) {

    if (typeof position === 'number' && position > 0 && position <= this.arr.length / 2 && Number.isInteger(position)) {

      this.arr.splice(position, 2)

      return chainMaker;
    } else {
      this.error = true;
      throw new Error('You can\'t remove incorrect link!');

    }
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  reverseChain() {
    if (this.arr.length <= 1) {
      return chainMaker;
    } else {
      this.arr.splice(this.arr.length - 1, 1);

      this.arr.reverse();
      this.arr.push('~~')
      return chainMaker;
    }

    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  finishChain() {
    if (this.error) {
      return ""
    } else {
      this.arr.splice(this.arr.length - 1, 1);

      return this.arr.join('').trim();
    }

    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
