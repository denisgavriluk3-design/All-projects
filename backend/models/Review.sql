CREATE TABLE product_stats (
  product_id INT PRIMARY KEY REFERENCES products(id) ON DELETE CASCADE,

  views INT DEFAULT 0,

  rating_value NUMERIC DEFAULT 0,
  rating_count INT DEFAULT 0,
  average_rating NUMERIC DEFAULT 0,

  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
