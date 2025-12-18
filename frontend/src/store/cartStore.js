import { create } from "zustand";

const storageKey = "cart-data";

const loadCart = () => {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(storageKey, JSON.stringify(cart));
};

export const useStore = create((set, get) => ({
  cart: loadCart(),

  addToCart: (product) =>
    set((state) => {
      const productId = product._id || product.id;
      const existing = state.cart.find((p) => (p._id || p.id) === productId);
      let newCart = existing
        ? state.cart.map((p) =>
            (p._id || p.id) === productId ? { ...p, count: p.count + 1 } : p
          )
        : [...state.cart, { ...product, count: 1 }];

      saveCart(newCart);
      return { cart: newCart };
    }),

  removeFromCart: (id) => {
    const newCart = get().cart.filter((p) => (p._id || p.id) !== id);
    saveCart(newCart);
    return set({ cart: newCart });
  },

  clearCart: () => {
    saveCart([]);
    set({ cart: [] });
  },

  increaseCount: (id) => {
    const newCart = get().cart.map((p) =>
      (p._id || p.id) === id ? { ...p, count: p.count + 1 } : p
    );
    saveCart(newCart);
    set({ cart: newCart });
  },

  decreaseCount: (id) => {
    const newCart = get().cart.map((p) =>
      (p._id || p.id) === id ? { ...p, count: p.count > 1 ? p.count - 1 : 1 } : p
    );
    saveCart(newCart);
    set({ cart: newCart });
  },

  getTotal: () => get().cart.reduce((sum, item) => sum + item.price * item.count, 0),
}));
