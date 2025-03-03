/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

type UserType = {
  id: string;
  full_name?: string;
  email: string;
  shopName: string;
  address: string;
};

type AuthState = {
  jwtToken: string | null;
  roleToken: string | null;
  refreshToken: string | null;
  user: UserType | null;
  isAuthenticated: boolean;
  setAuthData: (jwtToken: string, roleToken: string, refreshToken: string, user: UserType) => void;
  logout: () => void;
};

export const useAuthStoreUser = create<AuthState>()(
  persist(
    (set) => ({
      jwtToken: null,
      roleToken: null,
      refreshToken: null,
      user: null,
      isAuthenticated: false,
      setAuthData: (jwtToken, roleToken, refreshToken, user) => {
        set(
          produce((state: AuthState) => {
            state.jwtToken = jwtToken;
            state.roleToken = roleToken;
            state.refreshToken = refreshToken;
            state.user = user;
            state.isAuthenticated = !!jwtToken;
          })
        );
      },
      logout: () => {
        set(
          produce((state: AuthState) => {
            state.jwtToken = null;
            state.roleToken = null;
            state.refreshToken = null;
            state.user = null;
            state.isAuthenticated = false;
          })
        );
        localStorage.removeItem('auth-storage'); // Remove stored data
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => (typeof window !== 'undefined' ? localStorage : sessionStorage)), // Ensure storage is available
    }
  )
);
