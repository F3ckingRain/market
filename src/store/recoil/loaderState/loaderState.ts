import { atom, useRecoilState } from 'recoil';

import { initialLoaderState } from '@/store/recoil/loaderState/index';

export const loaderState = atom({
  key: 'loader',
  default: initialLoaderState,
});

const useLoaderState = () => useRecoilState(loaderState);

export default useLoaderState;
