const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function invertedHalfPyramid(n) {
  for (let i=0; i<n; i++) {
    let pattern = "";
    for (let j=i; j<n; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// value of n from user and calling invertedHalfPyramid on them.
rl.question('Enter the value of n : ', n => {
  invertedHalfPyramid(Number(n));
  rl.close();
});

