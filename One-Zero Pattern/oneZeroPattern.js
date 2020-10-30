const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function oneZeroPattern(n) {
  let count = 1;
  for (let i=1; i<=n; i++) {
    let pattern = "";
    for (let j=1; j<=i; j++) {
      if ((i+j) % 2 === 0) {
        pattern += 1 + " ";
      }
      else {
        pattern += 0 + " ";
      }
    }
    console.log(pattern);
  }
}

// value of n from user and calling oneZeroPattern on them.
rl.question('Enter the value of n : ', n => {
  oneZeroPattern(Number(n));
  rl.close();
});

