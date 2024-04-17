const express = require("express");
const router = express.Router();
let ProductsModel = require("../models/product.model");
const { isAuthenticated } = require("../middlewares/auth.middleware");
router.get("/", isAuthenticated, async (req, res) => {
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
  let newProductFromClient = req.body;

  let newProduct = new ProductsModel({ ...newProductFromClient });
  newProduct.save();

  res.json({ msg: `${newProduct.title} added successfully !` });
});

router.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  await ProductsModel.findOneAndDelete({ id });
  res.json({ msg: "Product deleted successfully", status: true });
});

module.exports = router;
