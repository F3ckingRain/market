import React, { ReactNode } from 'react';

import styles from './ModalContainer.module.scss';

import { useModal } from '@/hooks/useModal';

interface ModalContainerProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}

function ModalContainer({ opened, onClose, children }: ModalContainerProps) {
  const { mounted } = useModal(opened);

  if (!mounted) return null;

  return (
    <dialog
      className={
        opened ? `${styles.container} ${styles.container__open}` : styles.container
      }
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        {children}
      </div>
    </dialog>
  );
}

export default ModalContainer;
