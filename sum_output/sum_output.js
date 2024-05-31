const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const init = 0;
  const sum = input.reduce((acc, cur) => Number(acc) + Number(cur), init);
  console.log(`${Number(input[0])} + ${Number(input[1])} = ${sum}`);
});
