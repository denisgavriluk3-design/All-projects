CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,

  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE SET NULL,

  name TEXT NOT NULL,
  price NUMERIC NOT NULL,

  quantity INT DEFAULT 1
);
