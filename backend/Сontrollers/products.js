import express from "express";
import Product from "../models/Product.js";
import {
  getProducts,
  createProduct,
} from "./productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

export default router;
