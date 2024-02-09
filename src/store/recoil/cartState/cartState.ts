import { atom, useRecoilState } from 'recoil';

import { initialCartState } from '@/store/recoil/cartState/index';

export const cartState = atom({
  key: 'cart',
  default: initialCartState,
});

const useCartState = () => useRecoilState(cartState);

export default useCartState;
