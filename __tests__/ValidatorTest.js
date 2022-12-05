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

  test('checkLength 메서드 테스트 : 인풋 값이 3을 초과하거나 미만인 경우 예외처리한다.', () => {
    const validator = new Validator();
    const inputs = ['1', '1234'];
    const { count } = INVALID_INPUT_MESSAGE;

    expect(() => {
      inputs.forEach((input) => {
        validator.checkLength(input);
      });
    }).toThrow(count);
  });

  test('checkRange 메서드 테스트 : 인풋 값에 0이 포함되어 있는 경우 예외처리한다.', () => {
    const validator = new Validator();
    const inputs = ['104', '096', '450'];
    const { outOfRange } = INVALID_INPUT_MESSAGE;

    expect(() => {
      inputs.forEach((input) => {
        validator.checkRange(input);
      });
    }).toThrow(outOfRange);
  });

  test('checkDuplication 메서드 테스트 : 인풋 값에 중복된 숫자가 있는 경우 예외처리한다.', () => {
    const validator = new Validator();
    const inputs = ['112', '919', '444'];
    const { duplication } = INVALID_INPUT_MESSAGE;

    expect(() => {
      inputs.forEach((input) => {
        validator.checkDuplication(input);
      });
    }).toThrow(duplication);
  });

  test('checkCommand 메서드 테스트 : 인풋 값 커맨드가 1또는 2가 아닌 경우 예외처리한다.', () => {
    const validator = new Validator();
    const inputs = ['3', ' ', 'test', '', '1.', '2 ', ' 1'];
    const { invalidCommand } = INVALID_INPUT_MESSAGE;

    expect(() => {
      inputs.map(Number).forEach((input) => {
        validator.checkCommand(input);
      });
    }).toThrow(invalidCommand);
  });
});
