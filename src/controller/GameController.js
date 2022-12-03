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
    const userInput = (input) => {
      console.log(input);
    };

    this.#outputView.printStart();
    this.#inputView.readNumber(userInput);
  }
}

module.exports = GameController;
