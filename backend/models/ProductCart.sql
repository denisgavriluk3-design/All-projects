CREATE TABLE product_cart_snapshot (
  product_id INT PRIMARY KEY REFERENCES products(id) ON DELETE CASCADE,

  name TEXT NOT NULL,
  image TEXT,

  price NUMERIC NOT NULL,

  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
