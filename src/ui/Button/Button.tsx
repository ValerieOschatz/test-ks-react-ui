import type { MouseEventHandler } from "react";
import { SIZES, VARIANTS, type TButtonProps } from "../../types/buttonTypes";
import styles from './Button.module.css';

const Button = (props: TButtonProps) => {
  const {
    disabled,
    onClick,
    size = SIZES.MEDIUM,
    variant = VARIANTS.PRIMARY,
    ...restProps
  } = props;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) return;
    if (onClick) onClick(e);
  }

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`
        ${styles.button}
        ${styles[`button-${size}`]}
        ${styles[`button-${variant}`]}
      `}
      {...restProps}
    >
      button
    </button>
  )
}

export default Button;
