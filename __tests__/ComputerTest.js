const Computer = require('../src/model/Computer');

describe('✨ Computer 클래스 테스트', () => {
  test('숫자 3개를 뽑을 수 있다.', () => {
    const computer = new Computer();
    const numbers = computer.makeGameNumbers();

    expect(numbers.length).toBe(3);
  });
});
