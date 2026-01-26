CREATE TABLE product_card_snapshot (
  product_id INT PRIMARY KEY REFERENCES products(id) ON DELETE CASCADE,

  name TEXT NOT NULL,
  slug TEXT NOT NULL,

  price NUMERIC NOT NULL,
  old_price NUMERIC,

  discount NUMERIC,

  image TEXT,

  average_rating NUMERIC,
  rating_count INT,

  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
