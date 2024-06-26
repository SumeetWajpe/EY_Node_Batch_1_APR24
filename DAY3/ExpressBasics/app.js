const express = require("express");
const app = express(); // this app represents our application
const port = 3000;
const productRouter = require("./routes/products.route");
const authRouter = require("./routes/auth.route");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/onlineshoppingdb");
mongoose.connection.on("open", () => {
  console.log("Connected to OnlineShopping DB !");
});
//middlewares
app.use(express.static("static")); // express middleware used to serve static contents
app.use(express.json()); // populates req.body reading json data from req

// views
app.set("views", "./views");
app.set("view engine", "pug");
// routes
app.use("/products", productRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile("Index.html", { root: __dirname });
});

// app.get("/script.js", (req, res) => {
//   res.sendFile("script.js", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
