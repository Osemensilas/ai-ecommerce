import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      total: 0,

      addToCart: (product) => {
        const existing = get().cart.find((item) => item._id === product._id);
        let updatedCart;

        if (existing) {
          updatedCart = get().cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          );
        } else {
          updatedCart = [...get().cart, { ...product }];
        }

        set({
          cart: updatedCart,
          total: updatedCart.reduce((sum, i) => sum + i.price * i.quantity, 0),
        });
      },

      removeFromCart: (id) => {
        const updatedCart = get().cart.filter((item) => item._id !== id);
        set({
          cart: updatedCart,
          total: updatedCart.reduce((sum, i) => sum + i.price * i.quantity, 0),
        });
      },

      clearCart: () => set({ cart: [], total: 0 }),
    }),
    {
      name: "cart-storage", // persist cart in localStorage
    }
  )
);
