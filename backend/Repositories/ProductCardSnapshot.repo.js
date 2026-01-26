// repositories/productCardSnapshot.repo.js

export const productCardSnapshotRepo = {

    // ─────────────────────────────
    // Получить карточку по product_id
    // ─────────────────────────────
    async findByProductId(db, productId) {
      const res = await db.query(
        `
        SELECT *
        FROM product_card_snapshot
        WHERE product_id = $1
        `,
        [productId]
      );
  
      return res.rows[0] || null;
    },
  
    // ─────────────────────────────
    // Получить список карточек
    // (для главной страницы, каталога)
    // ─────────────────────────────
    async findAll(db, limit = 20, offset = 0) {
      const res = await db.query(
        `
        SELECT *
        FROM product_card_snapshot
        ORDER BY updated_at DESC
        LIMIT $1 OFFSET $2
        `,
        [limit, offset]
      );
  
      return res.rows;
    },
  
    // ─────────────────────────────
    // Создать snapshot
    // ─────────────────────────────
    async insert(db, data) {
      const {
        productId,
        name,
        price,
        oldPrice,
        image,
        discount,
        averageRating,
        ratingCount,
      } = data;
  
      const res = await db.query(
        `
        INSERT INTO product_card_snapshot (
          product_id,
          name,
          price,
          old_price,
          image,
          discount,
          average_rating,
          rating_count
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *
        `,
        [
          productId,
          name,
          price,
          oldPrice,
          image,
          discount,
          averageRating,
          ratingCount,
        ]
      );
  
      return res.rows[0];
    },
  
    // ─────────────────────────────
    // Обновить snapshot
    // ─────────────────────────────
    async update(db, productId, data) {
      const {
        name,
        price,
        oldPrice,
        image,
        discount,
        averageRating,
        ratingCount,
      } = data;
  
      const res = await db.query(
        `
        UPDATE product_card_snapshot
        SET
          name = $2,
          price = $3,
          old_price = $4,
          image = $5,
          discount = $6,
          average_rating = $7,
          rating_count = $8,
          updated_at = NOW()
        WHERE product_id = $1
        RETURNING *
        `,
        [
          productId,
          name,
          price,
          oldPrice,
          image,
          discount,
          averageRating,
          ratingCount,
        ]
      );
  
      return res.rows[0];
    },
  
    // ─────────────────────────────
    // Удалить snapshot
    // ─────────────────────────────
    async remove(db, productId) {
      await db.query(
        `
        DELETE FROM product_card_snapshot
        WHERE product_id = $1
        `,
        [productId]
      );
    }
  };
  