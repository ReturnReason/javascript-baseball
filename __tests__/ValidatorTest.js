const Validator = require('../src/validate/Validator');
const { INVALID_INPUT_MESSAGE } = require('../src/constant/messages');

describe('✅ Validator 클래스 테스트', () => {
  test('checkNumber 메서드 테스트 : 인풋 값이 숫자가 아닌 경우 예외처리한다.', () => {
    const validator = new Validator();
    const inputs = ['문자열', '2.', ' ', ''];
    const { notNumber } = INVALID_INPUT_MESSAGE;

    expect(() => {
      inputs.forEach((input) => {
        validator.checkNumber(input);
      });
    }).toThrow(notNumber);
  });
});
