const { INVALID_INPUT_MESSAGE } = require('../constant/messages');
const { LENGTH } = require('../constant/baseball');

class Validator {
  checkNumber(input) {
    const { notNumber } = INVALID_INPUT_MESSAGE;
    const isNaN = Number.isNaN(Number(input));
    if (isNaN || input.includes('.')) {
      throw notNumber;
    }
    return true;
  }

  checkLength(input) {
    const { count } = INVALID_INPUT_MESSAGE;
    if (input.length !== LENGTH) {
      throw count;
    }
    return true;
  }

  checkDuplication(input) {
    const inputNumberLength = [...new Set(input.split(''))].length;
    const { duplication } = INVALID_INPUT_MESSAGE;
    if (inputNumberLength !== LENGTH) {
      throw duplication;
    }
    return true;
  }
}

module.exports = Validator;
