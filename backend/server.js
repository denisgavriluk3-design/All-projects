import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import groupRoutes from "./routes/groupRoutes.js";
import uploadRoutes from "./routes/upload.js";
import router from "./routes/rating.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Роуты
app.use("/products", Product);
app.use("/groups", groupRoutes);
app.use("/api", upload);
app.use("/api",router)
// Централизованный обработчик ошибок
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB подключена"))
  .catch((err) => console.error("Ошибка MongoDB:", err));