const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function printButterflyPattern(n) {
  for (let i=1; i<=n; i++) {
    let pattern = "";
    for (let j=1; j<=i; j++) {
      pattern += "*";
    }
    let spaces = 2*n - 2*i;
    for (let j=1; j<=spaces; j++) {
      pattern += " ";
    }
    for (let j=1; j<=i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }

  for (let i=n; i>=1; i--) {
    let pattern = "";
    for (let j=1; j<=i; j++) {
      pattern += "*";
    }
    let spaces = 2*n - 2*i;
    for (let j=1; j<=spaces; j++) {
      pattern += " ";
    }
    for (let j=1; j<=i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// value of n from user and calling printButterflyPattern on them.
rl.question('Enter the value of n : ', n => {
  printButterflyPattern(Number(n));
  rl.close();
});

