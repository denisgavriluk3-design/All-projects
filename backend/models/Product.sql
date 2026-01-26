CREATE TABLE products (
    id SERIAL PRIMARY KEY,
  
    name TEXT NOT NULL,
    description TEXT,
  
    price NUMERIC NOT NULL,
    old_price NUMERIC,
  
    group_id INT NOT NULL,
    category_id INT NOT NULL,
  
    sku TEXT UNIQUE,
    slug TEXT UNIQUE NOT NULL,
  
    image TEXT,
  
    discount NUMERIC,
  
    is_active BOOLEAN DEFAULT true,
  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  