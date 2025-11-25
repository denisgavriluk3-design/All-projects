import express from "express";
import upload from "./upload.js";

const router = express.Router();

router.post("/upload", upload.single("image"), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Файл не загружен" });
    }
    const url = req.file.path;
    res.json({ url });
  } catch (err) {
    next(err);
  }
});

export default router;
