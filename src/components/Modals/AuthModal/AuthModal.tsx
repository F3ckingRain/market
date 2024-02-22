import React, { memo } from 'react';

import styles from './AuthModal.module.scss';

import { DefaultModalProps } from '@/components/Modals';
import ModalContainer from '@/containers/ModalContainer/ModalContainer';
import AuthModel from '@/models/AuthModel/AuthModel';

interface AuthModalProps extends DefaultModalProps {}

function AuthModal({ closeModal }: AuthModalProps) {
  const { opened } = AuthModel();

  return (
    <ModalContainer opened={!!opened} onClose={closeModal}>
      <div className={styles.authModal}>
        <div>
          header{' '}
          <button onClick={closeModal} type={'button'}>
            X
          </button>
        </div>

        <div>content</div>
      </div>
    </ModalContainer>
  );
}

export default memo(AuthModal);
