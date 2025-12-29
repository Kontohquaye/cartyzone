import { create } from "zustand";
import { Action, State } from "./cartStoreTypes";

// window.localStorage.getItem("cart");

const useCartStore = create<State & Action>((set) => ({
  cart: {
    products: [],
  },

  addToCart: (item) =>
    set((state) => {
      const existingProduct = state.cart.products.find(
        (product) => product.product_id === item.product_id
      );

      if (existingProduct) {
        return {
          cart: {
            products: state.cart.products.map((product) =>
              product.product_id === item.product_id
                ? {
                    ...product,
                    quantity: product.quantity + item.quantity,
                  }
                : product
            ),
          },
        };
      }

      return {
        cart: {
          products: [...state.cart.products, item],
        },
      };
    }),

  removeFromCart: (itemId) =>
    set((state) => ({
      cart: {
        products: state.cart.products.filter(
          (product) => product.product_id !== itemId
        ),
      },
    })),

  clearCart: () =>
    set(() => ({
      cart: {
        products: [],
      },
    })),

  setInitialCart: (localCarts) =>
    set(() => ({
      cart: {
        products: [...localCarts],
      },
    })),
}));

export default useCartStore;
