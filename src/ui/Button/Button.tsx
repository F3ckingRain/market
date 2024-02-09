import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import styles from './Button.module.scss';

import useThemeState from '@/store/recoil/configState/configState';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  additionalClassName?: string;
}

const Button: FC<ButtonProps> = memo(({ children, additionalClassName, ...props }) => {
  const [{ theme }] = useThemeState();

  return (
    <button
      className={`${styles.button} ${styles[`button__${theme}`]} ${additionalClassName}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
