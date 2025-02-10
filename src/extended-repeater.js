const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let { repeatTimes, separator,
    addition, additionRepeatTimes, additionSeparator
  } = options;

  if ((typeof addition == "boolean")) {
    addition = addition.toString()
  }
  if ((addition === null)) {
    addition = "null";
  }
  if (!separator && !additionSeparator) {
    additionSeparator = "|";
  }
  if (separator && !additionSeparator) {
    additionSeparator = "|";
  }

  let additionalString = ((addition || "") + (additionSeparator || "")).repeat(additionRepeatTimes || 1);

  additionalString = additionalString.substr(0, (additionalString ? additionalString.length : 0) - (additionSeparator ? additionSeparator.length : 0));

  let fullString = (str + (additionalString || "") + (separator || "+")).repeat(repeatTimes || 1);
  fullString = fullString.substr(0, fullString.length - (separator ? separator.length : 1));

  return fullString
}

module.exports = {
  repeater
};
