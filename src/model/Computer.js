const { pickNumber } = require('../utils/missionUtils');
const { START_NUM, END_NUM, LENGTH } = require('../constant/baseball');

class Computer {
  #gameNumbers;

  constructor() {
    this.#gameNumbers = this.makeGameNumbers();
  }

  makeGameNumbers() {
    const pickedNumbers = [];

    while (pickedNumbers.length < LENGTH) {
      const randomNumber = pickNumber(START_NUM, END_NUM);
      if (!pickedNumbers.includes(randomNumber)) {
        pickedNumbers.push(randomNumber);
      }
    }

    return [...pickedNumbers];
  }

  getGameNumbers() {
    return this.#gameNumbers;
  }
}

module.exports = Computer;
