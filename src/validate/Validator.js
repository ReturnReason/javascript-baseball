const { INVALID_INPUT_MESSAGE } = require('../constant/messages');
const { LENGTH } = require('../constant/baseball');

class Validator {
  checkNumber(input) {
    const { notNumber } = INVALID_INPUT_MESSAGE;
    const isNaN = Number.isNaN(Number(input));
    if (isNaN) {
      throw notNumber;
    }
  }

  checkLength(input) {
    const { count } = INVALID_INPUT_MESSAGE;
    if (input.length !== LENGTH) {
      throw count;
    }
  }
}

module.exports = Validator;
