import { atom, useRecoilState } from 'recoil';

import { initialModalState } from '@/store/recoil/modalState';

export const modalState = atom({
  key: 'modal',
  default: initialModalState,
});

const useModalState = () => useRecoilState(modalState);

export default useModalState;
