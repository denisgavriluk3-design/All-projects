export const orderRepo = {
    async insert(db, data) {
      const { userId, total, status = "CREATED" } = data;
  
      const res = await db.query(
        `
        INSERT INTO orders (user_id, total, status)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [userId, total, status]
      );
  
      return res.rows[0];
    }
  };
  