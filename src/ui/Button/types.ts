import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

type TSize = 'small' | 'medium' | 'large';
type TVariant = 'primary' | 'success' | 'error';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: TSize,
  variant?: TVariant,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  isDisabled: boolean
}
