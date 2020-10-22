const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function halfNumberPyramid(n) {
  for (let i=1; i<=n; i++) {
    let pattern = "";
    for (let j=1; j<=n; j++) {
      if (j <= i) {
        pattern += i;
      }
      else {
        pattern += " ";
      }
    }
    console.log(pattern);
  }
}

// value of n from user and calling halfNumberPyramid on them.
rl.question('Enter the value of n : ', n => {
  halfNumberPyramid(Number(n));
  rl.close();
});

