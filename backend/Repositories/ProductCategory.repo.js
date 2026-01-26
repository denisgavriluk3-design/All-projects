// repositories/productCategory.repo.js

export const productCategoryRepo = {

    async add(db, productId, categoryId) {
      await db.query(
        `
        INSERT INTO product_categories (product_id, category_id)
        VALUES ($1,$2)
        ON CONFLICT DO NOTHING
        `,
        [productId, categoryId]
      );
    },
  
    async remove(db, productId, categoryId) {
      await db.query(
        `
        DELETE FROM product_categories
        WHERE product_id = $1 AND category_id = $2
        `,
        [productId, categoryId]
      );
    },
  
    async findCategoriesByProduct(db, productId) {
      const res = await db.query(
        `
        SELECT c.*
        FROM categories c
        JOIN product_categories pc ON pc.category_id = c.id
        WHERE pc.product_id = $1
        `,
        [productId]
      );
      return res.rows;
    }
  };
  