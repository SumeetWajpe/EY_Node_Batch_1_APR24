const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secret_key = "JWTSecretKey";
app.get("/signin", (req, res) => {
  jwt.sign(
    { name: "Sumeet" },
    secret_key,
    { expiresIn: "2 Days" },
    (err, token) => {
      res.json({ token });
    },
  );
});

app.listen(4000, () => {
  console.log("Server running @ 4000 !");
});
