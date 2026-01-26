// repositories/category.repo.js

export const categoryRepo = {

    async findAll(db) {
      const res = await db.query(
        `SELECT * FROM categories ORDER BY name`
      );
      return res.rows;
    },
  
    async insert(db, name) {
      const res = await db.query(
        `
        INSERT INTO categories (name)
        VALUES ($1)
        RETURNING *
        `,
        [name]
      );
      return res.rows[0];
    },
  
    async remove(db, id) {
      await db.query(
        `DELETE FROM categories WHERE id = $1`,
        [id]
      );
    }
  };
  