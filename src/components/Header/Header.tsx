import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';


interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Header = ({ ...props }: Props) => {
  const styleClassNames = classnames(
    'h-1/6',
    'w-100',
    'flex',
    'flex-1',
    'justify-self-start',
    'justify-center',
  );
  return (
    <div
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
