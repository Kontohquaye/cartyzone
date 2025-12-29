export type cartItem = {
  product_id: string;
  quantity: number;
};

export type State = {
  cart: { products: cartItem[] | [] };
};

export type Action = {
  addToCart: (item: cartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  setInitialCart: (localCarts: cartItem[] | []) => void;
};
