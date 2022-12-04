const { Console, Random } = require('@woowacourse/mission-utils');

const print = (message) => {
  return Console.print(message);
};

const readLine = (query, callback) => {
  return Console.readLine(query, callback);
};

const close = () => {
  return Console.close();
};

const pickNumber = (start, end) => {
  return Random.pickNumberInRange(start, end);
};

module.exports = {
  pickNumber,
  print,
  readLine,
  close,
};
