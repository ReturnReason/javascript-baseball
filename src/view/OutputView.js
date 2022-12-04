const { PRINT_MESSAGE } = require('../constant/messages');
const { THREE_STRIKE } = require('../constant/baseball');
const { print, close } = require('../utils/missionUtils');

class OutputView {
  printStart() {
    const { start } = PRINT_MESSAGE;
    return print(start);
  }

  printStrikeBall(strikeCount, ballCount) {
    const { ball, strike, nothing } = PRINT_MESSAGE;

    if (strikeCount === THREE_STRIKE) return this.printEndGame();
    if (!strikeCount && !ballCount) return print(`${nothing}`);
    if (strikeCount && !ballCount) return print(`${strikeCount}${strike}`);
    if (!strikeCount && ballCount) return print(`${ballCount}${ball}`);

    return print(`${ballCount}${ball} ${strikeCount}${strike}`);
  }
}

module.exports = OutputView;
