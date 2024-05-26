const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const output = [];
  str = input[0];
  n = Number(input[1]);
  for (i = 0; i < n; i++) {
    output.push(str);
  }
  console.log(output.join(''));
});
