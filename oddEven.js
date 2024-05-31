const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  if (line % 2 === 0) {
    console.log(`${line} is even`);
  } else if (line % 2 === 1) {
    console.log(`${line} is odd`);
  }
});
