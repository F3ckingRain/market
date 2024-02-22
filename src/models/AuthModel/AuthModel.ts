import { useCallback, useMemo } from 'react';

import useModalState from '@/store/recoil/modalState/modalState';

const AuthModel = () => {
  const [modal, setModal] = useModalState();

  const openedModal = modal.opened && modal.name === 'authModal';

  const openAuthModal = useCallback(() => {
    setModal({ opened: true, name: 'authModal' });
  }, []);

  const result = useMemo(
    () => ({
      opened: openedModal,
      openAuthModal,
    }),
    [modal],
  );

  return { ...result };
};

export default AuthModel;
