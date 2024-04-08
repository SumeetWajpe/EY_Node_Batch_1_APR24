const http = require("http"); // built in
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   fs.readFile("Index.html", (err, dataFromTheFile) => {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(dataFromTheFile);
  //   });

  // OR
  const readableStream = fs.createReadStream("Index.html", {
    encoding: "utf-8",
  });
  readableStream.pipe(res);
});
// starts a simple http server locally on port 3000
server.listen(3000, "localhost", () => {
  console.log("Listening on 127.0.0.1:3000");
});
console.log("Ended !");
