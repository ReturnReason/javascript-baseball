const Validator = require('../validate/Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Computer = require('../model/Computer');
const BaseballGame = require('../model/BaseballGame');

class GameController {
  #inputView;
  #outputView;
  #computer;
  #baseballGeme;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();

    this.#computer = new Computer();
    this.#baseballGeme = new BaseballGame();

    this.validator = new Validator();
  }

  start() {
    const userInput = (input) => {
      this.validator.validCheckBundle(input);
      this.compare(input.split('').map(Number));
    };

    this.#outputView.printStart();
    this.#inputView.readNumber(userInput);
  }

  compare(userInput) {
    const computerNumbers = this.#computer.getGameNumbers();
    const strike = this.#baseballGeme.countStrike(computerNumbers, userInput);
    const ball = this.#baseballGeme.countBall(computerNumbers, userInput);

    this.#outputView.printStrikeBall(strike, ball);
  }
}

module.exports = GameController;
