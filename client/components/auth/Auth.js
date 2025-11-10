import { create } from 'zustand';
import axios from 'axios';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode'; // 👈 install with: npm install jwt-decode

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      // 🧾 Register new user
      register: async (name, email, password) => { 
        console.log('Registering user in store...', name, email, password);
        try {
          set({ loading: true, error: null });
          const res = await axios.post('https://ahiaserver-api.onrender.com/api/auth/register', {
            username: name,
            email,
            password,
          });
          console.log('Registration response:', res.data);
          if (res.data.email) {
            window.location.href = '/login';
          }
           
    
          
          set({
            user: res.data.user,
            token: res.data.access_token,
            loading: false,
          });
        } catch (err) {
          set({
            loading: false,
            error: err.response?.data?.message || 'Registration failed',
          });
        }
      },

      // 🔐 Login user
      login: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const res = await axios.post('https://ahiaserver-api.onrender.com/api/auth/login', {
            email,
            password,
          });

          if (!res.data.access_token || !res.data.user) {
            throw new Error('No token or user data received');
          }

          set({
            user: res.data.user,
            token: res.data.access_token,
            loading: false,
          });
        } catch (err) {
          set({
            loading: false,
            error: err.response?.data?.message || 'Login failed',
          });
        }
      },

      // 🚪 Logout user
      logout: () => { 
        console.log('Executing logout in store...'); 
        set({ user: null, token: null });
      },

      // ♻️ Restore session from storage + check token validity
      loadUserFromStorage: () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) return;

          // ✅ Decode token to check expiration
          const decoded = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decoded.exp && decoded.exp < currentTime) {
            // Token expired
            alert('Session expired. Please log in again.');
            localStorage.removeItem('token');
            set({ user: null, token: null });
            if (typeof window !== 'undefined') {
              window.location.href = '/login';
            }
            return;
          }

          // Token valid
          set({ token });
        } catch (err) {
          console.error('Error loading user from storage:', err);
          localStorage.removeItem('token');
          set({ user: null, token: null });
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
