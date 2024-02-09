type CartStateType = {
  cart: number[];
  favorite: number[];
};

const initialCartState: CartStateType = {
  cart: [],
  favorite: [],
};

export { initialCartState, CartStateType };
