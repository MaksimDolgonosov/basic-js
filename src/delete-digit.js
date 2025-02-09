const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const min = n.toString().split("").reduce((sum, cur) => {
    if (cur < sum) {
      sum = cur
    }
    return sum
  }, n.toString().split("")[0]);
  console.log(n);
  return +n.toString().split("").filter(item => item !== min).join("");
}

module.exports = {
  deleteDigit
};
