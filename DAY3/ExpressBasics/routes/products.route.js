const express = require("express");
const router = express.Router();
let products = require("../models/product.model");
router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  // let id = req.params.id;
  let id = +req.params.id; // fetching parameter from the url

  let theProduct = products.find(p => p.id == id);
  res.json(theProduct);
});

router.post("/newproduct", (req, res) => {
  // console.log(req.body);
  let newProduct = req.body;
  products.push(newProduct);
  res.json({ msg: `${newProduct.title} added successfully !` });
});
module.exports = router;
