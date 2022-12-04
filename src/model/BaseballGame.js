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

  countBall(computerNumbers, userNumbers) {
    let ball = 0;

    computerNumbers.forEach((computerNumber, i) => {
      if (computerNumber !== userNumbers[i] && computerNumbers.includes(userNumbers[i])) {
        ball += 1;
      }
    });

    return ball;
  }
}

module.exports = BaseballGame;
