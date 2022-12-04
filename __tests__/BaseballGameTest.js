const BaseballGame = require('../src/model/BaseballGame');

describe('⚾ BaseballGame 클래스 테스트', () => {
  test('countStrike 메서드 테스트 : 컴퓨터와 유저의 숫자 3개가 같은 자리, 같은 수이면 3스트라이크이다.', () => {
    const baseballGame = new BaseballGame();
    const computerNumbers = [1, 2, 3];
    const userNumber = [1, 2, 3];
    const result = baseballGame.countStrike(computerNumbers, userNumber);

    expect(result).toBe(3);
  });

  test('countBall 메서드 테스트 : 컴퓨터와 유저의 숫자 2개가 같지만, 자리가 다르면 2볼이다.', () => {
    const baseballGame = new BaseballGame();
    const computerNumbers = [1, 2, 3];
    const userNumber = [4, 1, 2];
    const result = baseballGame.countBall(computerNumbers, userNumber);

    expect(result).toBe(2);
  });
});
