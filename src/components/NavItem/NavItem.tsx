import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

const FIRST_LAYER = 'first-layer';
const SECOND_LAYER = 'second-layer';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: String,
  active: Boolean;
  text: String;
}

const defaultClassNames: string = classnames(
  'nav-item',
  'flex',
  'w-full',
  'h-full',
  'justify-center',
  'items-center',
);

const NavItem = ({ variant = 'first-layer', ...props }: Props) => {
  const {
    active
  } = props;
  const customizedClassNames: string = classnames(
    {
      'active': active || false,
      [`nav-item-${variant}`]: true,
      'bg-rose-300': active,
    });
  return (
    <button
      {...props}
      className={`${defaultClassNames} ${customizedClassNames}`}
    >
      {props.text}
    </button>
  )
}

export {
  NavItem
};
export type { Props };
