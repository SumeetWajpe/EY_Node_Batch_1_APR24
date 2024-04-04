const fs = require("fs");
console.log("Started");
const readableStream = fs.createReadStream("Input.txt");
readableStream.on("end", () => {
  console.log("File read completely !");
});
readableStream.on("data", chunk => {
  console.log(">>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>>>>");
  console.log(chunk.toString());
});
readableStream.on("error", err => {
  console.log(err);
});
console.log("Ended");
