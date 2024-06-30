import React from 'react';
import classNames from 'classnames';

type ButtonType = 'primary' | 'link' | 'default' | 'danger';
type ButtonSize = 'large' | 'small' | 'normal';
type UniButtonProps = {
  type: ButtonType;
  disabled: boolean;
  size: ButtonSize;
}

type ButtonProps = UniButtonProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;


const Button: React.FC<Partial<ButtonProps>> = props => {
  const {
    className,
    disabled,
    type = 'default',
    size = 'normal',
    ...rest
  } = props;
  const classes = classNames(
    'uni-btn',
    `uni-btn-${type}`,
    `uni-btn-${size}`,
    className
);
  return (
    <button
      className={classes}
      disabled={disabled}
      { ...rest }
    >
    {props.children}
  </button>
  )
}

export default Button;