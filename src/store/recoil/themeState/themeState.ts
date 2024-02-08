import { atom, useRecoilState } from 'recoil';

import { initialThemeState } from '@/store/recoil/themeState/index';

export const themeState = atom({
  key: 'theme',
  default: initialThemeState,
});

const useThemeState = () => useRecoilState(themeState);

export default useThemeState;
