import { ReactNode } from 'react';

import { ButtonType, ButtonVariant } from 'enums/buttonTypes';

import classes from './button.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  buttonType?: ButtonType;
  buttonVariant?: ButtonVariant;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  buttonType = ButtonType.Primary,
  buttonVariant = ButtonVariant.Contained,
  disabled = false,
}: ButtonProps) {
  const buttonClassName = `${classes.button__wrapper} ${classes[buttonType]} ${classes[buttonVariant]}`;

  const onClickHandler = () => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
