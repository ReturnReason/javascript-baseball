const { INVALID_INPUT_MESSAGE } = require('../constant/messages');

class Validator {
  checkNumber(input) {
    const { notNumber } = INVALID_INPUT_MESSAGE;
    const isNaN = Number.isNaN(Number(input));
    if (isNaN) {
      throw notNumber;
    }
  }
}

module.exports = Validator;
