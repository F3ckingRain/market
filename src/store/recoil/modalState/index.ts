import { Nullable } from '@/types/default';

type modalStateType = {
  opened: Nullable<boolean>;
  name: Nullable<string>;
};

const initialModalState: modalStateType = {
  opened: null,
  name: null,
};

export { modalStateType, initialModalState };
