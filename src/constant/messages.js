const { COMMAND } = require('./baseball');

const PRINT_MESSAGE = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
  end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: `게임을 새로 시작하려면 ${COMMAND.restart}, 종료하려면 ${COMMAND.quit}를 입력하세요.\n`,
});

const INVALID_INPUT_MESSAGE = Object.freeze({
  notNumber: '숫자가 아닌 값은 입력할 수 없습니다. 게임 종료!',
  empty: '공백은 입력할 수 없습니다. 게임 종료!',
  duplication: '중복되는 숫자가 포함되어 있습니다. 게임 종료!',
  count: '3개의 숫자를 입력해주세요. (3개 미만 또는 초과) 게임 종료!',
  invalidCommand: `(잘못된 입력) ${COMMAND.restart} 또는 ${COMMAND.quit}만 입력할 수 있습니다. 게임 종료!`,
});

module.exports = { PRINT_MESSAGE, INVALID_INPUT_MESSAGE };
