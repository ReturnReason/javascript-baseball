const Validator = require('../validate/Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Computer = require('../model/Computer');
const BaseballGame = require('../model/BaseballGame');
const { THREE_STRIKE } = require('../constant/baseball');
const { COMMAND } = require('../constant/baseball');

class GameController {
  #inputView;
  #outputView;
  #computer;
  #baseballGame;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#computer = new Computer();
    this.#baseballGame = new BaseballGame();
    this.validator = new Validator();

    this.#outputView.printStart();
  }

  start() {
    this.#computer.initGameNumbers();

    const userInput = (input) => {
      this.validator.validCheckBundle(input);
      this.compare(input.split('').map(Number));
      this.#inputView.readNumber(userInput);
    };

    this.#inputView.readNumber(userInput);
  }

  compare(userInput) {
    const computerNumbers = this.#computer.getGameNumbers();
    const strike = this.#baseballGame.countStrike(computerNumbers, userInput);
    const ball = this.#baseballGame.countBall(computerNumbers, userInput);

    this.#outputView.printStrikeBall(strike, ball);
    if (strike === THREE_STRIKE) this.askRestartGame();
  }

  askRestartGame() {
    const { restart, quit } = COMMAND;
    // 1, 2가 아닌 값 입력하면 예외처리
    const userInput = (input) => {
      if (Number(input) === restart) {
        this.start();
      }
      if (Number(input) === quit) {
        this.#outputView.quit();
      }
    };
    this.#inputView.readRestartGame(userInput);
  }
}

module.exports = GameController;
