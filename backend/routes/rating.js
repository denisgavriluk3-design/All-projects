import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// POST /api/rate/:id
router.post("/rate/:id", async (req, res) => {
  try {
    const { stars } = req.body; // 1-5
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    product.ratingValue += stars;
    product.ratingCount += 1;
    product.averageRating = product.ratingValue / product.ratingCount;

    await product.save();

    res.json({
      averageRating: product.averageRating,
      ratingCount: product.ratingCount,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
