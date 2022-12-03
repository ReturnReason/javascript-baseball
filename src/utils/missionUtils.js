const { Console, Random } = require('@woowacourse/mission-utils');
const { pickNumberInRange } = Random;

const print = (message) => {
  return Console.print(message);
};

const readLine = (query, callback) => {
  return Console.readLine(query, callback);
};

const close = () => {
  return Console.close();
};

module.exports = {
  pickNumberInRange,
  print,
  readLine,
  close,
};
