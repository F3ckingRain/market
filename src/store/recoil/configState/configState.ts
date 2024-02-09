import { atom, useRecoilState } from 'recoil';

import { initialConfigState } from '@/store/recoil/configState/index';

export const configState = atom({
  key: 'config',
  default: initialConfigState,
});

const useConfigState = () => useRecoilState(configState);

export default useConfigState;
