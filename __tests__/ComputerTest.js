const Computer = require('../src/model/Computer');

describe('✨ Computer 클래스 테스트', () => {
  test('makeGameNumbers 메서드 테스트 : 숫자 3개를 뽑을 수 있다.', () => {
    const computer = new Computer();
    const numbers = computer.makeGameNumbers();

    expect(numbers.length).toBe(3);
  });

  test('makeGameNumbers 메서드 테스트 : 뽑은 숫자 3개는 중복되지 않는 숫자로 이루어져있다.', () => {
    const computer = new Computer();
    const numbers = computer.makeGameNumbers();
    const removeDuplicate = [...new Set(numbers)];

    expect(removeDuplicate.length).toBe(3);
  });
});
