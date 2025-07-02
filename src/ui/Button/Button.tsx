import type { PropsWithChildren, MouseEventHandler } from "react";
import type { TButtonProps } from "./types";
import styles from './Button.module.css';

export const Button = (props: PropsWithChildren<TButtonProps>) => {
  const {
    children,
    size = 'medium',
    variant = 'primary',
    onClick,
    isDisabled,
    ...restProps
  } = props;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (isDisabled) return;
    if (onClick) onClick(evt);
  }

  return (
    <button
      data-testid="button"
      disabled={isDisabled}
      onClick={handleClick}
      className={`
        ${styles.button}
        ${styles[`button-${size}`]}
        ${styles[`button-${variant}`]}
        ${isDisabled ? styles['button-disabled'] : ''}
      `}
      {...restProps}
    >
      {children}
    </button>
  )
}
