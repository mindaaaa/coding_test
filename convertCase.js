const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  output = str.split('').map((alph) => {
    if (alph === alph.toUpperCase()) {
      return alph.toLowerCase();
    } else if (alph === alph.toLowerCase()) {
      return alph.toUpperCase();
    }
  });
  console.log(output.join(''));
});
