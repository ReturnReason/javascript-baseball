class BaseballGame {
  countStrike(computerNumbers, userNumbers) {
    let strike = 0;

    computerNumbers.forEach((computerNumber, i) => {
      if (computerNumber === userNumbers[i]) {
        strike += 1;
      }
    });

    return strike;
  }
}

module.exports = BaseballGame;
