const express = require("express");
const router = express.Router();
let ProductsModel = require("../models/product.model");
router.get("/", async (req, res) => {
  const products = await ProductsModel.find({}); // db
  res.json(products);
});

router.get("/:id", async (req, res) => {
  // let id = req.params.id;
  let id = +req.params.id; // fetching parameter from the url

  let theProduct = await ProductsModel.findOne({ id });
  res.json(theProduct);
});

router.get("/details/:id", async (req, res) => {
  let id = +req.params.id;
  let product = await ProductsModel.findOne({ id });
  res.render("productdetails", { product });
});
router.post("/newproduct", (req, res) => {
  // console.log(req.body);
  let newProduct = req.body;
  products.push(newProduct);
  res.json({ msg: `${newProduct.title} added successfully !` });
});

router.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  products = products.filter(p => p.id !== +id);
  res.json(products);
});

module.exports = router;
