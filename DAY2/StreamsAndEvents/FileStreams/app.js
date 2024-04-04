const fs = require("fs");

console.log("Started");
// Non Blocking
fs.readFile("Input.txt", (err, dataFromFile) => {
  console.log(dataFromFile.toString());
});

// Blocking
// const dataFromFile = fs.readFileSync("Input.txt");
// console.log(dataFromFile.toString());
console.log("Ended");
