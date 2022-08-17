import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

const FIRST_LAYER = 'first-layer';
const SECOND_LAYER = 'second-layer';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: String,
  active: Boolean;
  text: String;
}

const NavItem = ({ variant = 'first-layer', ...props }: Props) => {
  const classNames: string = classnames(
    'nav-item',
    'flex',
    'p-1',
    'justify-center',
    'align-center',
    {
      'active': props.active || false,
      [`nav-item-${variant}`]: true,
    });
  return (
    <button
      {...props}
      className={classNames}
    >
      {props.text}
    </button>
  )
}

export {
  NavItem
};
export type { Props };
