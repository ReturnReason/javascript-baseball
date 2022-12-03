const { PRINT_MESSAGE } = require('../constant/messages');
const { readLine } = require('../utils/missionUtils');

class InputView {
  readNumber(callback) {
    const { input } = PRINT_MESSAGE;
    return readLine(input, callback);
  }
}

module.exports = InputView;
