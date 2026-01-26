export const orderItemRepo = {
    async insertMany(db, orderId, items) {
      const values = [];
      const placeholders = [];
  
      items.forEach((item, i) => {
        const baseIndex = i * 7;
  
        placeholders.push(`
          ($${baseIndex + 1}, $${baseIndex + 2}, $${baseIndex + 3},
           $${baseIndex + 4}, $${baseIndex + 5}, $${baseIndex + 6}, $${baseIndex + 7})
        `);
  
        values.push(
          orderId,
          item.productId,
          item.name,
          item.price,
          item.image,
          item.quantity,
          item.subtotal
        );
      });
  
      await db.query(
        `
        INSERT INTO order_items (
          order_id,
          product_id,
          name_snapshot,
          price_snapshot,
          image_snapshot,
          quantity,
          subtotal
        )
        VALUES ${placeholders.join(",")}
        `,
        values
      );
    }
  };
  