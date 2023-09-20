import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faTshirt, faCalendar, faWrench, faTags, faSquare, faPuzzlePiece } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faTshirt, faCalendar, faWrench, faTags, faSquare, faPuzzlePiece);

const FIRST_LAYER = 'first-layer';
const SECOND_LAYER = 'second-layer';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'first-layer' | 'second-layer',
  active: number;
  text: String;
  fontawesomeiconname: string,
}

const NavItem = ({ ...props }: Props) => {
  const {
    variant,
    active,
    fontawesomeiconname
  } = props;

  const defaultClassNames: string = classnames(
    'nav-item',
    'flex',
    'w-full',
    {
      'h-full': variant === FIRST_LAYER,
      'h-32': variant === FIRST_LAYER,
    },
    'justify-center',
    'items-center',
    {
      'flex-col': variant === FIRST_LAYER,
      'flex-row': variant === FIRST_LAYER,
    },
    'text-2xl',
  );

  const customizedClassNames: string = classnames(
    {
      [`nav-item-${variant}`]: true,
      'text-slate-300': !active,
      'text-black': active,
    });


  const textClass: string = classnames(
    'text-xs',
    'py-2',
  )

  return (
    <button
      {...props}
      className={`${defaultClassNames} ${customizedClassNames}`}
    >
      <FontAwesomeIcon icon={`fa-solid ${fontawesomeiconname}`} />
      <span className={textClass}>{props.text}</span>
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
