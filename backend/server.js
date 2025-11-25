import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import Banner from "./models/Banner.js";
import uploadRoutes from "./routes/upload.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB подключена"))
  .catch((err) => console.error("Ошибка MongoDB:", err));

// Роут для загрузки файлов
app.use("/api", uploadRoutes);

// Роут для получения всех товаров
app.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err); // передаём ошибку в централизованный обработчик
  }
});

// Роут для добавления нового товара
app.post("/products", async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
});

// Роут для получения всех баннеров, сгруппированных по группам и категориям
app.get("/banners", async (req, res, next) => {
  try {
    const banners = await Banner.find({ isActive: true }).sort({ order: 1 });
    
    // Группируем баннеры по группам и категориям
    const grouped = banners.reduce((acc, banner) => {
      const group = banner.group || "Без группы";
      const category = banner.category || "Без категории";
      
      if (!acc[group]) acc[group] = {};
      if (!acc[group][category]) acc[group][category] = [];
      
      acc[group][category].push(banner);
      return acc;
    }, {});
    
    res.json(grouped);
  } catch (err) {
    next(err);
  }
});

// Роут для получения всех групп (для меню категорий)
app.get("/groups", async (req, res, next) => {
  try {
    const groups = await Product.distinct("group");
    res.json(groups.filter(Boolean)); // Убираем null/undefined
  } catch (err) {
    next(err);
  }
});

// Роут для добавления нового баннера
app.post("/banners", async (req, res, next) => {
  try {
    const newBanner = new Banner(req.body);
    await newBanner.save();
    res.status(201).json(newBanner);
  } catch (err) {
    next(err);
  }
});

// Централизованный обработчик ошибок
app.use((err, req, res, next) => {
  console.error("❌ Ошибка:", err.message);
  res.status(500).json({ error: "Внутренняя ошибка сервера" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту ${PORT}`));

