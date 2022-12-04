const { PRINT_MESSAGE } = require('../constant/messages');
const { readLine } = require('../utils/missionUtils');

class InputView {
  readNumber(callback) {
    const { input } = PRINT_MESSAGE;
    return readLine(input, callback);
  }

  readRestartGame(callback) {
    const { restart } = PRINT_MESSAGE;
    return readLine(restart, callback);
  }
}

module.exports = InputView;
