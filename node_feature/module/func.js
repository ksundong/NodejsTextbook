const { odd, even } = require('./var');

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;

// exports can be use object, So, func.js can't convert to exports.
// module.exports and exports has a reference relationship, I recommend not using module.exports and exports in same time.