import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';


interface Props extends HTMLAttributes<HTMLDivElement> {
}

const styleClassNames = classnames(
  'overall-header',
  'row-span-1',
  'flex',
  'justify-self-start',
  'place-content-center',
  'place-items-center',
  'bg-white',
  'text-rose-300',
);

const Header = ({ ...props }: Props) => {
  return (
    <div
      id="overall_header"
      {...props}
      className={styleClassNames}
    >
      {'Dear Closet'}
    </div>
  )
}

export {
  Header
};
export type { Props };
