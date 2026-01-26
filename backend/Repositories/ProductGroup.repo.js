// repositories/productGroup.repo.js

export const productGroupRepo = {

    async add(db, productId, groupId) {
      await db.query(
        `
        INSERT INTO product_groups (product_id, group_id)
        VALUES ($1,$2)
        ON CONFLICT DO NOTHING
        `,
        [productId, groupId]
      );
    },
  
    async remove(db, productId, groupId) {
      await db.query(
        `
        DELETE FROM product_groups
        WHERE product_id = $1 AND group_id = $2
        `,
        [productId, groupId]
      );
    },
  
    async findGroupsByProduct(db, productId) {
      const res = await db.query(
        `
        SELECT g.*
        FROM groups g
        JOIN product_groups pg ON pg.group_id = g.id
        WHERE pg.product_id = $1
        `,
        [productId]
      );
      return res.rows;
    }
  };
  