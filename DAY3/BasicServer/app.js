const http = require("http"); // built in
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    //   fs.readFile("Index.html", (err, dataFromTheFile) => {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.end(dataFromTheFile);
    //   });

    // OR
    const readableStream = fs.createReadStream("Index.html", {
      encoding: "utf-8",
    });
    readableStream.pipe(res);
  } else if (req.url == "/styles.css") {
    const readableStream = fs.createReadStream("styles.css", {
      encoding: "utf-8",
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    readableStream.pipe(res);
  } else if (req.url == "/script.js") {
    const readableStream = fs.createReadStream("script.js", {
      encoding: "utf-8",
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    readableStream.pipe(res);
  } else if (req.url == "/products") {
    var products = [
      { id: 1, title: "MacBookPro" },
      { id: 2, title: "Laptop" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, "Not Found !");
    res.end("Resource not found !");
  }
});
// starts a simple http server locally on port 3000
server.listen(3000, "localhost", () => {
  console.log("Listening on 127.0.0.1:3000");
});
console.log("Ended !");
