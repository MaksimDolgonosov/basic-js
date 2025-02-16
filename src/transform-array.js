const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let flag = '';
  return arr.reduce((sum, cur, i, array) => {

    switch (cur) {
      case '--double-next':
        if (array[i + 1] === undefined) {
          return sum
        }
        sum.push(array[i + 1]);
        return sum;
      case '--double-prev':
        if (array[i - 1] === undefined || flag === "deleted") {
          return sum
        }
        sum.push(array[i - 1]);
        return sum;
      case '--discard-prev':

        if (array[i - 1] === undefined || flag === "deleted") {

          return sum
        }
        sum.pop();
        return sum;
      case '--discard-next':
        flag = '--discard-next'
        return sum;
      default:
        if (flag === '--discard-next') {
          flag = 'deleted';
          return sum;
        } else {
          sum.push(cur)
          return sum
        }
    }
  }, [])

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  transform
};
