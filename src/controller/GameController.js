const Validator = require('../validate/Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.validator = new Validator();
  }

  start() {
    const userInput = (input) => {
      this.validator.checkNumber(input);
      this.validator.checkLength(input);
      this.validator.checkDuplication(input);
    };

    this.#outputView.printStart();
    this.#inputView.readNumber(userInput);
  }
}

module.exports = GameController;
