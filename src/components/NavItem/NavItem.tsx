import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faTshirt, faCalendar, faWrench, faTags, faSquare, faPuzzlePiece } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faTshirt, faCalendar, faWrench, faTags, faSquare, faPuzzlePiece);

const FIRST_LAYER = 'first-layer';
const SECOND_LAYER = 'second-layer';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: String,
  active: Boolean;
  text: String;
  fontawesomeiconname: string,
}

const defaultClassNames: string = classnames(
  'nav-item',
  'flex',
  'w-full',
  'h-full',
  'justify-center',
  'items-center',
  'flex-col',
  'text-2xl',
  'py-2',
);

const NavItem = ({ variant = 'first-layer', ...props }: Props) => {
  const {
    active,
    fontawesomeiconname
  } = props;

  const customizedClassNames: string = classnames(
    {
      'active': active,
      [`nav-item-${variant}`]: true,
    });

  return (
    <button
      {...props}
      className={`${defaultClassNames} ${customizedClassNames}`}
      style={{ color: active ? 'black' : 'lightgray' }}
    >
      <FontAwesomeIcon icon={`fa-solid ${fontawesomeiconname}`} />
      <span className="text-xs py-2">{props.text}</span>
    </button>
  )
}

NavItem.defaultProps = {
  fontawesomeiconname: 'fa-tshirt'
}

export {
  NavItem
};
export type { Props };
