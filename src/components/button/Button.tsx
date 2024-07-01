import React, { useMemo } from 'react';
import classNames from 'classnames';
import IconFont from '../iconfont/IconFont';

type ButtonType = 'primary' | 'link' | 'default' | 'danger';
type ButtonSize = 'large' | 'small' | 'normal';
type UniButtonProps = {
  type: ButtonType;
  disabled: boolean;
  size: ButtonSize;
  loading: boolean;
}

type ButtonProps = UniButtonProps & Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;


const Button: React.FC<Partial<ButtonProps>> = props => {
  const {
    className,
    disabled,
    type = 'default',
    size = 'normal',
    loading = false,
    ...rest
  } = props;
  const classes = classNames(
    'uni-btn',
    `uni-btn-type-${type}`,
    `uni-btn-size-${size}`,
    className
  );

  const isDisabled = useMemo(() => {
    return disabled || loading;
  }, [disabled, loading]);
  return (
    <button
      { ...rest }
      className={classes}
      disabled={isDisabled}
    >
    {
      props.loading && <IconFont type="loading" className="btn-loading" spin />
    }
    {props.children}
  </button>
  )
}

export default Button;