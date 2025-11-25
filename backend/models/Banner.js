import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  group: String, // Группа товаров (например: "Electronics", "Fashion")
  category: String, // Подгруппа/категория (например: "iPhone", "Gaming")
  title: String, // Заголовок баннера
  subtitle: String, // Подзаголовок (например: "iPhone 14 Series")
  description: String, // Описание
  imageUrl: String, // URL изображения из Cloudinary
  logoUrl: String, // URL логотипа (например, Apple logo)
  discountText: String, // Текст скидки (например: "Up to 10% off Voucher")
  buttonText: String, // Текст кнопки (например: "Shop Now")
  isActive: { type: Boolean, default: true }, // Активен ли баннер
  order: { type: Number, default: 0 }, // Порядок отображения
});

export default mongoose.model("Banner", bannerSchema);





