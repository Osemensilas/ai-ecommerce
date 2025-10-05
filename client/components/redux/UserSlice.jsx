// UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,              // user info
  items: [],               // cart items
  isAuthenticated: false,  // login status
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Auth reducers
    login: (state, action) => {
      state.user = action.payload;   // {id, name, email, token...}
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.items = []; // clear cart on logout
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },

    // Cart reducers
    addItem: (state, action) => {
      const item = action.payload; // {id, name, price}
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { login, logout, updateUser, addItem, removeItem, clearItems } =
  userSlice.actions;
export default userSlice.reducer;
