const secret_key = "MySecretKey";
const jwt = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
  let value = req.headers.authorization;
  if (value) {
    let token = value.split(" ")[1];
    if (token) {
      jwt.verify(token, secret_key, (err, decodedToken) => {
        if (!err) {
          console.log(decodedToken);
          req.user = decodedToken.name;
          next();
        } else {
          res.status(401).send({ msg: "Invalid Token" });
        }
      });
    } else {
      res.status(500).send("Token Not Found !");
    }
  }
}

module.exports.isAuthenticated = isAuthenticated;
