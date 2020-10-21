const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function flippedHorizontallyHalfPyramid(n) {
  for (let i=1; i<=n; i++) {
    let pattern = "";
    for (let j=1; j<=n; j++) {
      if (j <= n-i) {
        pattern += " ";
      }
      else {
        pattern += "*";
      }
    }
    console.log(pattern);
  }
}

// value of n from user and calling flippedHorizontallyHalfPyramid on them.
rl.question('Enter the value of n : ', n => {
  flippedHorizontallyHalfPyramid(Number(n));
  rl.close();
});

