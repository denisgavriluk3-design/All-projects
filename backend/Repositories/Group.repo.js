// repositories/group.repo.js

export const groupRepo = {

    async findAll(db) {
      const res = await db.query(
        `SELECT * FROM groups ORDER BY name`
      );
      return res.rows;
    },
  
    async insert(db, name) {
      const res = await db.query(
        `
        INSERT INTO groups (name)
        VALUES ($1)
        RETURNING *
        `,
        [name]
      );
      return res.rows[0];
    },
  
    async remove(db, id) {
      await db.query(
        `DELETE FROM groups WHERE id = $1`,
        [id]
      );
    }
  };
  