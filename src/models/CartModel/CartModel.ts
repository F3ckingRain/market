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

  const setFavorite = useCallback(
    (id: number) => {
      setState(s => ({
        ...s,
        favorite: checkIsFavorite(id)
          ? [...s.favorite].filter(el => el !== id)
          : [id, ...s.favorite],
      }));
    },
    [checkIsFavorite],
  );

  const addToCart = useCallback((id: number) => {
    setState(s => ({ ...s, cart: [id, ...s.cart] }));
  }, []);

  const result = useMemo(
    () => ({ cartState: state, checkIsFavorite, checkIsInCart, setFavorite, addToCart }),
    [state],
  );

  return { ...result };
};

export default CartModel;
