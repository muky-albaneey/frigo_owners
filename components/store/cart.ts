/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

// Define the interface for the cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  color?: string;
  quantity: number;
  shopName?: string;
  title?: string;
  type?: string;
  size?: string;
  delivery_location?: string;
  
}

// Define the interface for the cart store
interface CartStore {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// Create the Zustand store
const useCartStore = create<CartStore>((set) => ({
  cart: [],

  setCart: (cart) => set({ cart }),

  addToCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.id === item.id);
      let updatedCart;

      if (existingItemIndex >= 0) {
        updatedCart = state.cart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: item.quantity }];
      }

      return { cart: updatedCart };
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));

// **Persist cart changes in AsyncStorage**
export const usePersistCart = () => {
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    AsyncStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
};

// **Load cart from AsyncStorage when the app starts**
export const useLoadCart = () => {
  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };

    loadCart();
  }, [setCart]);
};

// **Helper function for total price**
export const useTotalPrice = () => {
  const cart = useCartStore((state) => state.cart);
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default useCartStore;
