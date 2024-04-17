const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret_key = "MySecretKey";
router.get("/signin", (req, res) => {
  jwt.sign(
    { name: "Sumeet" },
    secret_key,
    { expiresIn: "2 Days" },
    (err, token) => {
      res.json({ token });
    },
  );
});

module.exports = router;
