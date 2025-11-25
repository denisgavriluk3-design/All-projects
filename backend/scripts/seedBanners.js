// Скрипт для добавления тестовых баннеров в MongoDB
// Запуск: node scripts/seedBanners.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import Banner from "../models/Banner.js";

dotenv.config();

const seedBanners = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Подключено к MongoDB");

    // Очищаем существующие баннеры
    await Banner.deleteMany({});
    console.log("🗑️ Старые баннеры удалены");

    // Создаем тестовые баннеры
    const banners = [
      {
        group: "Electronics",
        category: "iPhone",
        title: "iPhone 14 Series",
        subtitle: "iPhone 14 Series",
        description: "Latest iPhone models with amazing features",
        imageUrl: "https://res.cloudinary.com/your-cloud/image/upload/v1/aiwon.png", // Замените на ваш Cloudinary URL
        logoUrl: "https://res.cloudinary.com/your-cloud/image/upload/v1/apple-logo.png", // Замените на ваш Cloudinary URL
        discountText: "Up to 10% off Voucher",
        buttonText: "Shop Now",
        isActive: true,
        order: 1,
      },
      {
        group: "Electronics",
        category: "Gaming",
        title: "Gaming Accessories",
        subtitle: "Gaming Collection",
        description: "Best gaming gear for professionals",
        imageUrl: "https://res.cloudinary.com/your-cloud/image/upload/v1/gaming.png",
        logoUrl: "https://res.cloudinary.com/your-cloud/image/upload/v1/gaming-logo.png",
        discountText: "Up to 15% off",
        buttonText: "Shop Now",
        isActive: true,
        order: 2,
      },
      {
        group: "Fashion",
        category: "Women",
        title: "Women's Fashion",
        subtitle: "New Collection",
        description: "Latest fashion trends",
        imageUrl: "https://res.cloudinary.com/your-cloud/image/upload/v1/fashion.png",
        logoUrl: null,
        discountText: "Up to 20% off",
        buttonText: "Shop Now",
        isActive: true,
        order: 3,
      },
    ];

    await Banner.insertMany(banners);
    console.log(`✅ Добавлено ${banners.length} баннеров`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Ошибка:", error);
    process.exit(1);
  }
};

seedBanners();





