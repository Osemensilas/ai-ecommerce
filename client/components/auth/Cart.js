import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const API_URL = "https://ahiaserver-api.onrender.com/api/cart"; // replace with your backend URL

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      total: 0,

      fetchCart: async (userId) => {
        if (!userId) return;
        try {
          const res = await axios.get(`${API_URL}/${userId}`);
          set({ cart: res.data.items, total: res.data.total });
        } catch (err) {
          console.error("Failed to fetch cart", err);
        }
      },

      addToCart: async (userId, product) => {
        console.log(userId)

        if (!userId) return;
        try {
          const res = await axios.post(`${API_URL}/add`, {
            userId,
            productId: product._id,
            quantity: product.quantity,
            price: product.price,
          });
          set({ cart: res.data.items, total: res.data.total });
        } catch (err) {
          console.error("Failed to add item", err);
        }
      },

      removeFromCart: async (userId, productId) => {
        if (!userId) return;
        try {
          const res = await axios.delete(`${API_URL}/remove/${userId}/${productId}`);
          set({ cart: res.data.items, total: res.data.total });
        } catch (err) {
          console.error("Failed to remove item", err);
        }
      },

      updateQuantity: async (userId, productId, quantity) => {
        if (!userId) return;
        try {
          const res = await axios.patch(`${API_URL}/update`, {
            userId,
            productId,
            quantity,
          });
          set({ cart: res.data.items, total: res.data.total });
        } catch (err) {
          console.error("Failed to update quantity", err);
        }
      },

      clearCart: async (userId) => {
        if (!userId) return;
        try {
          const res = await axios.delete(`${API_URL}/clear/${userId}`);
          set({ cart: res.data.items, total: res.data.total });
        } catch (err) {
          console.error("Failed to clear cart", err);
        }
      },
    }),
    { name: "cart-storage" }
  )
);
