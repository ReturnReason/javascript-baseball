const Validator = require('../validate/Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Computer = require('../model/Computer');

class GameController {
  #inputView;
  #outputView;
  #computer;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#computer = new Computer();
    this.validator = new Validator();
  }

  start() {
    const userInput = (input) => {
      this.validator.validCheckBundle(input);
    };

    this.#outputView.printStart();
    this.#inputView.readNumber(userInput);
  }
}

module.exports = GameController;
