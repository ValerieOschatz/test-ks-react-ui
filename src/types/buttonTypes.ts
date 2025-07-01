import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

export enum SIZES {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export enum VARIANTS {
  PRIMARY = "primary",
  SUCCESS = "success",
  ERROR = "error"
}

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: SIZES,
  variant?: VARIANTS,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  isDisabled: boolean
}
