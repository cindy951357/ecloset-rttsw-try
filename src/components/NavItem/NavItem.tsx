
import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import './NavItem.scss';
const FIRST_LAYER = 'first-layer';
const SECOND_LAYER = 'second-layer';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'first-layer' | 'second-layer';
  active: Boolean;
  text: String;
}

const NavItem = ({ ...props }: Props) => {
  const bgColor: string = props.variant === FIRST_LAYER ? 'bg-pink-200' : 'bg-fuchsia-200'
  const classNames: string = classnames({
    'nav-item': true,
    'active': props.active,
    [`nav-item-${props.variant}`]: true,
    [bgColor]: true,
    ['p-3']: true,
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
