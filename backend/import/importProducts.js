import fs from "fs";
import path from "path";
import streamifier from "streamifier";
import products from "./products.json" with { type: "json" };
import dotenv from "dotenv";
dotenv.config();

import cloudinary from "../config/cloudinary.js";
import { connectDB } from "../config/db.js";

import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Group from "../models/Group.js";
import { generateSlug } from "../utils/generateSlug.js";

// ----------------------------- SETTINGS -----------------------------
const IS_DRY = process.argv.includes("--dry");
const IS_UPDATE = process.argv.includes("--update");

const BACKUP_FILE = "./backup/products_backup.json";
const LOG_FILE = "./logs/import.log";

function log(text) {
  console.log(text);
  fs.appendFileSync(LOG_FILE, text + "\n");
}

// ----------------------------- UPLOAD IMAGE -----------------------------
function uploadBuffer(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "products" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}

// ----------------------------- BACKUP -----------------------------
async function createBackup() {
  const existing = await Product.find();
  fs.writeFileSync(BACKUP_FILE, JSON.stringify(existing, null, 2));
  log(`🛡 Backup created: ${existing.length} products`);
}

// ----------------------------- MAIN -----------------------------
async function start() {
  log("\n========== IMPORT START ==========");
  log(IS_DRY ? "⚠ DRY MODE (no save)" : "🚀 NORMAL MODE");

  await connectDB();
  await createBackup();

  for (const item of products) {
    log(`\n→ Importing: ${item.name}`);

    // ---------- CREATE GROUP ----------
    let group = await Group.findById(item.groupId);
    if (!group) {
      log(`  + Group created: ${item.groupId}`);
      if (!IS_DRY) {
        group = await Group.create({
          _id: item.groupId,
          name: item.groupId
        });
      }
    }

    // ---------- CREATE CATEGORY ----------
    let category = await Category.findById(item.categoryId);
    if (!category) {
      log(`  + Category created: ${item.categoryId}`);
      if (!IS_DRY) {
        category = await Category.create({
          _id: item.categoryId,
          name: item.categoryId
        });
      }
    }

    // ---------- SLUG ----------
    const slug = generateSlug(item.name, item.groupId, item.categoryId);

    const slugExists = await Product.findOne({ slug });
    if (slugExists && !IS_UPDATE) {
      log("  ⚠ SKIP: slug already exists → " + slug);
      continue;
    }

    // ---------- CHECK EXISTING PRODUCT ----------
    const existing = await Product.findOne({
      name: item.name,
      groupId: item.groupId,
      categoryId: item.categoryId,
    });

    // ---------- IMAGE ----------
    let imageUrl = existing?.image || null;

    if (item.image) {
      const imgPath = path.resolve("import", item.image);

      if (!fs.existsSync(imgPath)) {
        log(`  ⚠ Image NOT FOUND → ${imgPath}`);
      } else {
        const buffer = fs.readFileSync(imgPath);
        if (!IS_DRY) {
          const result = await uploadBuffer(buffer);
          imageUrl = result.secure_url;
        }
        log(`  ✓ Image uploaded`);
      }
    }

    // ---------- UPDATE ----------
    if (existing && IS_UPDATE) {
      log(`  🟡 Updating product`);

      if (!IS_DRY) {
        existing.name = item.name;

    existing.price = Number(item.price);
    existing.oldPrice = item.oldPrice ? Number(item.oldPrice) : undefined;

    existing.discount = item.discount
      ? Number(item.discount.replace("%", ""))
      : undefined;

    existing.views = item.views ? Number(item.views) : existing.views;

    existing.ratingValue = item.ratingValue
      ? Number(item.ratingValue)
      : existing.ratingValue;

    existing.ratingCount = item.ratingCount
      ? Number(item.ratingCount)
      : existing.ratingCount;

    existing.averageRating = item.averageRating
      ? Number(item.averageRating)
      : existing.averageRating;

    existing.groupId = item.groupId;
    existing.categoryId = item.categoryId;

    existing.slug = slug;
    existing.image = imageUrl;
        await existing.save();
      }

      log(`  ✓ Updated → slug: ${slug}`);
      continue;
    }

    // ---------- CREATE PRODUCT ----------
    if (!IS_DRY) {
      const newProduct = await Product.create({
        name: item.name,
        price: Number(item.price),
        oldPrice: item.oldPrice ? Number(item.oldPrice) : undefined,
        discount: item.discount ? Number(item.discount.replace("%", "")) : undefined,
        groupId: item.groupId,
        categoryId: item.categoryId,
        image: imageUrl,
        discount: item.discount,
        views: item.views ? Number(item.views) : 0,
        ratingValue: item.ratingValue ? Number(item.ratingValue) : 0,
        ratingCount: item.ratingCount ? Number(item.ratingCount) : 0,
        averageRating: item.averageRating ? Number(item.averageRating) : 0,
        slug,
      });
      log(`  ✓ CREATED → SKU: ${newProduct.sku} | Slug: ${slug}`);
    } else {
      log(`  ✓ DRY: Product would be created`);
    }
  }

  log("\n🎉 IMPORT FINISHED");
  process.exit();
}

start().catch((err) => {
  log("\n❌ ERROR:");
  log(err.message);
  process.exit(1);
});
