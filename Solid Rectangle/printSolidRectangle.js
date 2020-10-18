const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print star pattern.
function printSolidRectangle(r, c) {
  for (let i=0; i<r; i++) {
    let pattern = "";
    for (let j=0; j<c; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// rows and columns from user and calling printSolidRectangle on them.
rl.question('Enter the number of rows : ', rows => {
  rl.question('Enter the number of columns : ', columns => {
    printSolidRectangle(Number(rows), Number(columns));
    rl.close();
  })
});

