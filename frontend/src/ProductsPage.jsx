import React, { useEffect, useState } from "react";
import { useStore } from "./store/cartStore";
import { API_ENDPOINTS } from "./config/api";

export default function ProductsPage() {
  const addToCart = useStore((state) => state.addToCart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(API_ENDPOINTS.PRODUCTS)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setError(err.message);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const grouped = products.reduce((acc, p) => {
    const group = p.group || "Без группы";
    const category = p.category || "Без категории";
    if (!acc[group]) acc[group] = {};
    if (!acc[group][category]) acc[group][category] = [];
    acc[group][category].push(p);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">🛒 Каталог товаров</h1>
        <p className="text-gray-500">Загрузка товаров...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">🛒 Каталог товаров</h1>
        <p className="text-red-500">Ошибка загрузки: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🛒 Каталог товаров</h1>
      {Object.keys(grouped).length === 0 ? (
        <p className="text-gray-500">Товары не найдены</p>
      ) : (
        Object.entries(grouped).map(([groupName, categories]) => (
          <div key={groupName} className="mb-6 border p-3 rounded-lg">
          <h2 className="text-lg font-bold text-blue-700 mb-2">
            Группа: {groupName}
          </h2>
          {Object.entries(categories).map(([categoryName, items]) => (
            <div key={categoryName} className="ml-4 mb-3">
              <h3 className="font-semibold text-green-700 mb-2">
                Категория: {categoryName}
              </h3>
              {items.map((p) => (
                <div
                  key={p._id}
                  className="border p-2 rounded my-1 bg-white flex justify-between items-center"
                >
                  <div>
                    <p>
                      {p.name} —{" "}
                      <span className="font-semibold">{p.price}$</span>
                    </p>
                    <div>
                      {p.isNew && (
                        <span className="text-green-500 font-bold mr-2">
                          🆕 Новинка
                        </span>
                      )}
                      {p.discount && (
                        <span className="text-red-500 font-bold mr-2">
                          💸 Скидка
                        </span>
                      )}
                      {!p.isNew && !p.discount && (
                        <span className="text-gray-500 font-semibold">
                          📦 Обычный
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                  >
                    Добавить
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        ))
      )}
    </div>
  );
}
