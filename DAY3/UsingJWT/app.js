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

app.get("/verify", (req, res) => {
  let value = req.headers.authorization;
  let token = value.split(" ")[1];
  if (token) {
    jwt.verify(token, secret_key, (err, decodedToken) => {
      if (!err) {
        console.log(decodedToken);
        res.json({ msg: "Token Verified !" });
      } else {
        res.status(401).send({ msg: "Invalid Token" });
      }
    });
  } else {
    res.status(500).send("Token Not Found !");
  }
});

app.listen(4000, () => {
  console.log("Server running @ 4000 !");
});
