const { PRINT_MESSAGE } = require('../constant/messages');
const { print, close } = require('../utils/missionUtils');

class OutputView {
  printStart() {
    const { start } = PRINT_MESSAGE;
    return print(start);
  }
}

module.exports = OutputView;
