const { INVALID_INPUT_MESSAGE } = require('../constant/messages');
const { LENGTH, COMMAND } = require('../constant/baseball');

class Validator {
  validCheckBundle(input) {
    this.checkRange(input);
    this.checkNumber(input);
    this.checkLength(input);
    this.checkDuplication(input);
  }

  checkRange(input) {
    const { outOfRange } = INVALID_INPUT_MESSAGE;
    if (input.includes(0)) {
      throw outOfRange;
    }
    return true;
  }

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

  checkCommand(input) {
    const { restart, quit } = COMMAND;
    const { invalidCommand } = INVALID_INPUT_MESSAGE;
    if (!input === restart && !input === quit) {
      throw invalidCommand;
    }
    return true;
  }
}

module.exports = Validator;
