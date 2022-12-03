const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  start() {
    this.#outputView.printStart();
  }
}

module.exports = GameController;
