const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  var products = [
    { id: 1, title: "MacBookPro" },
    { id: 2, title: "Laptop" },
  ];
  res.json(products);
});

router.get("/:id", (req, res) => {
  // let id = req.params.id;
  let id = +req.params.id; // fetching parameter from the url
  var products = [
    { id: 1, title: "MacBookPro" },
    { id: 2, title: "Laptop" },
  ];
  let theProduct = products.find(p => p.id == id);
  res.json(theProduct);
});

router.post("/newproduct", (req, res) => {
  res.json({ msg: "New Product endpoint hit !" });
});
module.exports = router;
