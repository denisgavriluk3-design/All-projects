// services/product.service.js
import { productRepo } from "../repositories/product.repo.js";
import { productCardSnapshotRepo } from "../repositories/ProductCardSnapshot.repo.js";
import { generateSlug } from "../utils/generateSlug.js";
import { pool } from "../config/db.js";

export const productService = {

  // ─────────────────────────────
  // Создание продукта + snapshot
  // ─────────────────────────────
  async create(data) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const product = await productRepo.insert(client, data);

      await productCardSnapshotRepo.insert(client, {
        productId: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.old_price,
        image: product.image,
        discount: product.discount,
        averageRating: product.average_rating,
        ratingCount: product.rating_count,
      });

      await client.query("COMMIT");

      return product;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Обновление продукта + snapshot
  // ─────────────────────────────
  async update(productId, data) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const product = await productRepo.update(client, productId, data);

      await productCardSnapshotRepo.update(client, productId, {
        name: product.name,
        price: product.price,
        oldPrice: product.old_price,
        image: product.image,
        discount: product.discount,
        averageRating: product.average_rating,
        ratingCount: product.rating_count,
      });

      await client.query("COMMIT");

      return product;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Удаление продукта + snapshot
  // ─────────────────────────────
  async delete(productId) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      await productRepo.remove(client, productId);
      await productCardSnapshotRepo.remove(client, productId);

      await client.query("COMMIT");
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Рейтинг продукта + обновление snapshot
  // ─────────────────────────────
  async rate(productId, rating) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const product = await productRepo.addRating(client, productId, rating);

      await productCardSnapshotRepo.update(client, productId, {
        averageRating: product.average_rating,
        ratingCount: product.rating_count,
      });

      await client.query("COMMIT");

      return product;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Получить продукт по id (read)
  // ─────────────────────────────
  async getById(productId) {
    const client = await pool.connect();
    try {
      const product = await productRepo.findById(client, productId);
      if (!product) throw new Error("PRODUCT_NOT_FOUND");
      return product;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Получить продукт по slug (read)
  // ─────────────────────────────
  async getBySlug(slug) {
    const client = await pool.connect();
    try {
      const product = await productRepo.findBySlug(client, slug);
      if (!product) throw new Error("PRODUCT_NOT_FOUND");
      return product;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Получить snapshot карточек (для каталога)
  // ─────────────────────────────
  async getCards(limit = 20, offset = 0) {
    const client = await pool.connect();
    try {
      return await productCardSnapshotRepo.findAll(client, limit, offset);
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Получить минимальные данные для корзины
  // ─────────────────────────────
  async getForCart(productId) {
    const client = await pool.connect();
    try {
      const card = await productCardSnapshotRepo.findByProductId(client, productId);
      if (!card) throw new Error("PRODUCT_NOT_FOUND");

      return {
        productId: card.product_id,
        name: card.name,
        price: card.price,
        image: card.image,
      };
    } finally {
      client.release();
    }
  },

  async createOrUpdate(client, data) {
    // 1️⃣ найти существующий продукт
    const existing = await productRepo.findByBusinessKey(client, {
      name: data.name,
      groupId: data.groupId,
      categoryId: data.categoryId
    });

    // 2️⃣ если нет — создать
    if (!existing) {
      const slug = generateSlug(
        data.name,
        data.groupId,
        data.categoryId
      );

      const product = await productRepo.insert(client, {
        ...data,
        slug
      });

      await productCardSnapshotRepo.insert(client, {
        productId: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.old_price,
        image: product.image,
        discount: product.discount,
        averageRating: product.average_rating,
        ratingCount: product.rating_count
      });

      return product;
    }

    // 3️⃣ если есть — обновить
    const updated = await productRepo.update(client, existing.id, data);

    await productCardSnapshotRepo.update(client, existing.id, {
      name: updated.name,
      price: updated.price,
      oldPrice: updated.old_price,
      image: updated.image,
      discount: updated.discount,
      averageRating: updated.average_rating,
      ratingCount: updated.rating_count
    });

    return updated;
  }

};
