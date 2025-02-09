const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let final = '';
  for (let i = 0; i < str.length; i++) {
    const regExp = new RegExp(str[i], g)
    const arr = str.match(regExp);
    final += `${arr.length === 1 ? '' : arr.length}${str[i]}`
  }
}

module.exports = {
  encodeLine
};
