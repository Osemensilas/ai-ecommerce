// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserSlice"; // import the reducer from your slice

const persistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

// Example of getting the current user and logging it
const getCurrentUser = () => {
  const userState = store.getState().user;
  console.log("Current User:", userState);
};

// Subscribe to Redux state changes (better than persistor.subscribe)
store.subscribe(() => {
  getCurrentUser();
});

// Call once initially
getCurrentUser();

export default store;
