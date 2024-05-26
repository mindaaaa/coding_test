const fs = require('fs');
const inputData = fs
  .readFileSync('./test/test.txt')
  .toString()
  .split(' ')
  .map((value) => +value);

const [a, b] = inputData;

console.log(a + b);
