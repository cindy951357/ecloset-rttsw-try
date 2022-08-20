import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faTshirt, faCalendar } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faTshirt, faCalendar);

const FIRST_LAYER = 'first-layer';
const SECOND_LAYER = 'second-layer';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: String,
  active: Boolean;
  text: String;
  fontAwesomeIconName: string,
}

const defaultClassNames: string = classnames(
  'nav-item',
  'flex',
  'w-full',
  'h-full',
  'justify-center',
  'items-center',
  'flex-col',
);

const NavItem = ({ variant = 'first-layer', ...props }: Props) => {
  const {
    active,
    fontAwesomeIconName
  } = props;

  const customizedClassNames: string = classnames(
    {
      'active': active || false,
      [`nav-item-${variant}`]: true,
    });

  return (
    <button
      {...props}
      className={`${defaultClassNames} ${customizedClassNames}`}
      style={{ color: active ? 'black' : 'gray' }}
    >
      <FontAwesomeIcon icon={`fa-solid ${fontAwesomeIconName}`} />
      {props.text}
    </button>
  )
}

NavItem.defaultProps = {
  fontAwesomeIconName: 'fa-tshirt'
}

export {
  NavItem
};
export type { Props };
