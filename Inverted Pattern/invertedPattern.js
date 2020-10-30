const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function invertedPattern(n) {
  let count = 1;
  for (let i=1; i<=n; i++) {
    let pattern = "";
    for (let j=1; j<=n+1-i; j++) {
      pattern += j;
    }
    console.log(pattern);
  }
}

// value of n from user and calling invertedPattern on them.
rl.question('Enter the value of n : ', n => {
  invertedPattern(Number(n));
  rl.close();
});

