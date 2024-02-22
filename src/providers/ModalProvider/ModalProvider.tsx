import React, { lazy, Suspense, useCallback } from 'react';

const AuthModal = lazy(() => import('@/components/Modals/AuthModal/AuthModal'));

import { initialModalState } from '@/store/recoil/modalState';
import useModalState from '@/store/recoil/modalState/modalState';
import { Preloader } from '@/ui/Loader/Loader';

const Loader = <Preloader text={'Загрузка модальных окон'} active={true} />;

function ModalProvider() {
  const [, setModal] = useModalState();

  const closeModal = useCallback(() => {
    setModal(initialModalState);
  }, []);

  return (
    <div>
      <Suspense fallback={Loader}>
        <AuthModal closeModal={closeModal} />
      </Suspense>
    </div>
  );
}

export default ModalProvider;
