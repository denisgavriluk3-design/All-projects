// repositories/product.repo.js

export const productRepo = {

    async findById(db, id) {
      const res = await db.query(
        `SELECT * FROM products WHERE id = $1`,
        [id]
      );
      
      if (!res.rows[0]) return null;
      
      // Получаем рейтинг из product_stats если есть
      const statsRes = await db.query(
        `SELECT rating_value, rating_count, average_rating 
         FROM product_stats WHERE product_id = $1`,
        [id]
      );
      
      const stats = statsRes.rows[0];
      return {
        ...res.rows[0],
        average_rating: stats?.average_rating || 0,
        rating_count: stats?.rating_count || 0
      };
    },
  
    async findAll(db) {
      const res = await db.query(
        `SELECT * FROM products ORDER BY created_at DESC`
      );
      return res.rows;
    },
  
    async insert(db, data) {
      const {
        name,
        description,
        price,
        old_price,
        oldPrice,
        image,
        group_id,
        groupId,
        category_id,
        categoryId,
        sku,
        slug,
        discount,
        is_active,
        isActive
      } = data;
      
      // Маппинг camelCase -> snake_case
      const groupIdFinal = group_id ?? groupId;
      const categoryIdFinal = category_id ?? categoryId;
      const oldPriceFinal = old_price ?? oldPrice;
      const isActiveFinal = is_active ?? isActive ?? true;
  
      const res = await db.query(
        `
        INSERT INTO products (
          name, description, price, old_price, image,
          group_id, category_id, sku, slug, discount, is_active
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *
        `,
        [name, description, price, oldPriceFinal, image, groupIdFinal, categoryIdFinal, sku, slug, discount, isActiveFinal]
      );
  
      // Получаем рейтинг из product_stats если есть
      const statsRes = await db.query(
        `SELECT rating_value, rating_count, average_rating 
         FROM product_stats WHERE product_id = $1`,
        [res.rows[0].id]
      );
      
      const stats = statsRes.rows[0];
      return {
        ...res.rows[0],
        average_rating: stats?.average_rating || 0,
        rating_count: stats?.rating_count || 0
      };
    },
  
    async update(db, id, data) {
      const {
        name,
        description,
        price,
        old_price,
        oldPrice,
        image,
        group_id,
        groupId,
        category_id,
        categoryId,
        sku,
        slug,
        discount,
        is_active,
        isActive
      } = data;
  
      const fields = [];
      const values = [id];
      let paramIndex = 2;
  
      if (name !== undefined) {
        fields.push(`name = $${paramIndex++}`);
        values.push(name);
      }
      if (description !== undefined) {
        fields.push(`description = $${paramIndex++}`);
        values.push(description);
      }
      if (price !== undefined) {
        fields.push(`price = $${paramIndex++}`);
        values.push(price);
      }
      if (old_price !== undefined || oldPrice !== undefined) {
        fields.push(`old_price = $${paramIndex++}`);
        values.push(old_price ?? oldPrice);
      }
      if (image !== undefined) {
        fields.push(`image = $${paramIndex++}`);
        values.push(image);
      }
      if (group_id !== undefined) {
        fields.push(`group_id = $${paramIndex++}`);
        values.push(group_id);
      }
      if (category_id !== undefined) {
        fields.push(`category_id = $${paramIndex++}`);
        values.push(category_id);
      }
      if (sku !== undefined) {
        fields.push(`sku = $${paramIndex++}`);
        values.push(sku);
      }
      if (slug !== undefined) {
        fields.push(`slug = $${paramIndex++}`);
        values.push(slug);
      }
      if (discount !== undefined) {
        fields.push(`discount = $${paramIndex++}`);
        values.push(discount);
      }
      if (is_active !== undefined || isActive !== undefined) {
        fields.push(`is_active = $${paramIndex++}`);
        values.push(is_active ?? isActive);
      }
  
      fields.push(`updated_at = NOW()`);
  
      const res = await db.query(
        `
        UPDATE products
        SET ${fields.join(', ')}
        WHERE id = $1
        RETURNING *
        `,
        values
      );
  
      // Получаем рейтинг из product_stats если есть
      const statsRes = await db.query(
        `SELECT rating_value, rating_count, average_rating 
         FROM product_stats WHERE product_id = $1`,
        [id]
      );
      
      const stats = statsRes.rows[0];
      return {
        ...res.rows[0],
        average_rating: stats?.average_rating || 0,
        rating_count: stats?.rating_count || 0
      };
    },
  
    async remove(db, id) {
      await db.query(
        `DELETE FROM products WHERE id = $1`,
        [id]
      );
    },

    async findBySlug(db, slug) {
      const res = await db.query(
        `SELECT * FROM products WHERE slug = $1`,
        [slug]
      );
      
      if (!res.rows[0]) return null;
      
      // Получаем рейтинг из product_stats если есть
      const statsRes = await db.query(
        `SELECT rating_value, rating_count, average_rating 
         FROM product_stats WHERE product_id = $1`,
        [res.rows[0].id]
      );
      
      const stats = statsRes.rows[0];
      return {
        ...res.rows[0],
        average_rating: stats?.average_rating || 0,
        rating_count: stats?.rating_count || 0
      };
    },

    async findByBusinessKey(db, { name, groupId, categoryId }) {
      const res = await db.query(
        `SELECT * FROM products 
         WHERE name = $1 AND group_id = $2 AND category_id = $3`,
        [name, groupId, categoryId]
      );
      
      if (!res.rows[0]) return null;
      
      // Получаем рейтинг из product_stats если есть
      const statsRes = await db.query(
        `SELECT rating_value, rating_count, average_rating 
         FROM product_stats WHERE product_id = $1`,
        [res.rows[0].id]
      );
      
      const stats = statsRes.rows[0];
      return {
        ...res.rows[0],
        average_rating: stats?.average_rating || 0,
        rating_count: stats?.rating_count || 0
      };
    },

    async addRating(db, productId, rating) {
      // Обновляем или создаем запись в product_stats
      await db.query(
        `
        INSERT INTO product_stats (product_id, rating_value, rating_count, average_rating)
        VALUES ($1, $2, 1, $2)
        ON CONFLICT (product_id) 
        DO UPDATE SET
          rating_value = product_stats.rating_value + $2,
          rating_count = product_stats.rating_count + 1,
          average_rating = (product_stats.rating_value + $2)::NUMERIC / NULLIF(product_stats.rating_count + 1, 0),
          updated_at = NOW()
        `,
        [productId, rating]
      );

      // Получаем обновленный продукт с рейтингом
      const productRes = await db.query(
        `SELECT * FROM products WHERE id = $1`,
        [productId]
      );
      
      const statsRes = await db.query(
        `SELECT rating_value, rating_count, average_rating 
         FROM product_stats WHERE product_id = $1`,
        [productId]
      );
      
      const stats = statsRes.rows[0];
      return {
        ...productRes.rows[0],
        average_rating: stats?.average_rating || 0,
        rating_count: stats?.rating_count || 0
      };
    }
  };
  