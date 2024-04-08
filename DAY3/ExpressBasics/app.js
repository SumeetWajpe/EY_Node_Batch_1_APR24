const express = require("express");
const app = express(); // this app represents our application
const port = 3000;

app.use(express.static("static")); // express middleware used to serve static contents
app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile("Index.html", { root: __dirname });
});

// app.get("/script.js", (req, res) => {
//   res.sendFile("script.js", { root: __dirname });
// });

app.get("/products", (req, res) => {
  var products = [
    { id: 1, title: "MacBookPro" },
    { id: 2, title: "Laptop" },
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
