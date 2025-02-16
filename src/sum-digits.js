const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = n.toString().split('');
  let answer = 0;


  function recReducer(array) {
    answer = array.reduce((sum, cur, next) => {
      sum += +cur;
      return sum
    }, 0)
    if (answer > 9) {
      recReducer(answer.toString().split(''))
    }
  }
  recReducer(arr);

  return answer;

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
