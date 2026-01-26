// services/order.service.js
import { pool } from "../config/db.js";
import { orderRepo } from "../repositories/order.repo.js";
import { orderItemRepo } from "../repositories/orderItem.repo.js";
import { productCardSnapshotRepo } from "../repositories/ProductCardSnapshot.repo.js";
import { paymentRepo } from "../repositories/payment.repo.js";

export const orderService = {

  // ─────────────────────────────
  // Создание заказа
  // ─────────────────────────────
  async create(userId, items) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      // 1️⃣ создать заказ (без total)
      const order = await orderRepo.create(client, userId);

      let total = 0;
      const orderItems = [];

      // 2️⃣ собрать snapshot товаров
      for (const item of items) {
        const product = await productCardSnapshotRepo.findByProductId(
          client,
          item.productId
        );

        if (!product) {
          throw new Error("PRODUCT_NOT_FOUND");
        }

        const subtotal = product.price * item.quantity;
        total += subtotal;

        orderItems.push({
          orderId: order.id,
          productId: product.product_id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: item.quantity,
          subtotal,
        });
      }

      // 3️⃣ сохранить order_items (ОДНИМ запросом)
      await orderItemRepo.insertMany(client, orderItems);

      // 4️⃣ обновить total
      await orderRepo.updateTotal(client, order.id, total);

      await client.query("COMMIT");

      return {
        orderId: order.id,
        total,
      };

    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  },

  // ─────────────────────────────
  // Оплата заказа
  // ─────────────────────────────
  async pay(orderId) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const order = await orderRepo.findById(client, orderId);

      if (!order) throw new Error("ORDER_NOT_FOUND");
      if (order.status !== "CREATED") {
        throw new Error("ORDER_CANNOT_BE_PAID");
      }

      // 5️⃣ зафиксировать оплату
      await paymentRepo.create(client, {
        orderId,
        amount: order.total,
        method: "MOCK",
      });

      // 6️⃣ сменить статус
      await orderRepo.updateStatus(client, orderId, "PAID");

      await client.query("COMMIT");

    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  }
};
