const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function printFloydsTriangle(n) {
  let count = 1;
  for (let i=1; i<=n; i++) {
    let pattern = "";
    for (let j=1; j<=n; j++) {
      if (j <= i) {
        if (count < 10) {
          pattern += `${count}  `;
        }
        else {
          pattern += `${count} `;
        }
        count++;
      }
      else {
        pattern += " ";
      }
    }
    console.log(pattern);
  }
}

// value of n from user and calling printFloydsTriangle on them.
rl.question('Enter the value of n : ', n => {
  printFloydsTriangle(Number(n));
  rl.close();
});

