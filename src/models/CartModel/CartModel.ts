import { useCallback, useMemo } from 'react';

import useCartState from '@/store/recoil/cartState/cartState';

const CartModel = () => {
  const [state, setState] = useCartState();

  const checkIsFavorite = useCallback(
    (id: number) => {
      return state.favorite.includes(id);
    },
    [state],
  );

  const checkIsInCart = useCallback(
    (id: number) => {
      return state.cart.includes(id);
    },
    [state],
  );

  const addFavorite = useCallback((id: number) => {
    setState(s => ({ ...s, favorite: [id, ...s.favorite] }));
  }, []);

  const addToCart = useCallback((id: number) => {
    setState(s => ({ ...s, cart: [id, ...s.cart] }));
  }, []);

  const result = useMemo(
    () => ({ cartState: state, checkIsFavorite, checkIsInCart, addFavorite, addToCart }),
    [state],
  );

  return { ...result };
};

export default CartModel;
