import { create } from "zustand";

export const useStore = create((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const productId = product._id || product.id;
      const existing = state.cart.find((p) => (p._id || p.id) === productId);
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            (p._id || p.id) === productId ? { ...p, count: p.count + 1 } : p
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, count: 1 }] };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({ 
      cart: state.cart.filter((p) => (p._id || p.id) !== id) 
    })),

  clearCart: () => set({ cart: [] }),

  increaseCount: (id) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        (p._id || p.id) === id ? { ...p, count: p.count + 1 } : p
      ),
    })),

  decreaseCount: (id) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        (p._id || p.id) === id ? { ...p, count: p.count > 1 ? p.count - 1 : 1 } : p
      ),
    })),

  getTotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.count, 0),
}));
